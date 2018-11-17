import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators, AsyncValidator, ValidationErrors, AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueUsernameValidator implements AsyncValidator {
  constructor(private userService: UserService) { }

  validate(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    return this.userService.usernameTaken(ctrl.value).pipe(
      map(isTaken => {
        return isTaken ? null : { usernameTaken: false };
      })
    );
  }
} 

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  providers:  [ UserService ]
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;
  hidePassword: boolean;

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get hide() {
    return this.hidePassword;
  }

  constructor(public dialogRef:  MatDialogRef<LoginDialogComponent>, 
    private uniqueUsernameValidator: UniqueUsernameValidator,
    private userService: UserService,
    public snackBar: MatSnackBar) { 
    this.dialogRef.disableClose = true;
    this.hidePassword = true;

    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ], [
        // loses context without arrow function (this becomes undefined), can also bind context to validate
        (ctrl: AbstractControl) => this.uniqueUsernameValidator.validate(ctrl)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  setFormTouched(formGroup: FormGroup): void {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.setFormTouched(control);
      }
    });
  }

  postData(url, data) {
      return fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(data)
      });
      // .then(response => response.json());
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onLoginClick() {
    if(this.loginForm.valid) {
      this.userService.authenticate(this.username.value, this.password.value).subscribe(validCreds => {
        if(validCreds) {
          this.snackBar.open("Successfully logged on", "OK");
          this.dialogRef.close();
        } else {
          this.snackBar.open("Incorrect password", "OK");
        }
      });
    } else {
      this.snackBar.open("Please check the form for errors", "OK");
    }

    this.setFormTouched(this.loginForm);
  }

  ngOnInit() { }
}

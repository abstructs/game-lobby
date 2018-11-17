import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators, ValidatorFn, AsyncValidator, ValidationErrors, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueUsernameValidator implements AsyncValidator {
  constructor(private userService: UserService) { }

  validate(ctrl: AbstractControl): Observable<ValidationErrors> {
    return this.userService.usernameTaken(ctrl.value).pipe(
      map(isTaken => {
        return { uniqueUsername: !isTaken }
      })
    )
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
  usernameTaken: boolean;

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get hide() {
    return this.hidePassword;
  }

  get usernameIsTaken() {
    console.log('get')
    console.log(this.usernameTaken);
    return this.usernameTaken;
  }

  constructor(public dialogRef:  MatDialogRef<LoginDialogComponent>, 
    private uniqueUsernameValidator: UniqueUsernameValidator) { 
    this.dialogRef.disableClose = true;
    this.hidePassword = true;
    this.usernameTaken = false;

    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
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
    
    // this.postData("http://localhost:3000/user/valid-username", {
    //   user: {
    //     ...this.loginForm.value
    //   }
    // }).then(res => {
    //   switch(res.status) {
    //     case 200:
    //       // console.log('success')
    //       // this.usernameTaken = false;
    //       // this.loginForm.invalid ? this.setFormTouched(this.loginForm) : console.log("post data");
    //       break;
    //     default:
    //       // this.usernameTaken = true;
    //       // console.log(this);
    //       // console.log(this.usernameIsTaken && this.username.valid)
    //       // console.log("invalid");
    //       break;
    //   }
    // });

    // this.setFormTouched(this.loginForm);
  }

  ngOnInit() { }
}

import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators, ValidatorFn, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class UniqueUsername implements AsyncValidator {
//   constructor(private heroesService: LoginDialogComponent) {}

//   validate(
//     ctrl: AbstractControl
//   ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
//     return this.heroesService.isAlterEgoTaken(ctrl.value).pipe(
//       map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
//       catchError(() => null)
//     );
//   }
// }

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
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

  constructor(public dialogRef:  MatDialogRef<LoginDialogComponent>) { 
    this.dialogRef.disableClose = true;
    this.hidePassword = true;
    this.usernameTaken = false;

    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
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

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
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

  constructor(public dialogRef:  MatDialogRef<LoginDialogComponent>) { 
    this.dialogRef.disableClose = true;
    this.hidePassword = true;

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

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onLoginClick() {
    if(this.loginForm.invalid) {
      this.setFormTouched(this.loginForm);
    } else {
      this.dialogRef.close(true);
    }
  }

  ngOnInit() { }
}

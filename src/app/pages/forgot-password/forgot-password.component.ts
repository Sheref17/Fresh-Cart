import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { ForgotPassService } from '../../core/services/forgotPass/forgot-pass.service';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

private readonly _ForgotpassService = inject(ForgotPassService)
private readonly _Router = inject(Router)

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  email: string = '';
  userMsg: string = '';

  forgotForm: FormGroup = new FormGroup({
    email: new FormControl('')
  })

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('')
  })

  resetPassword: FormGroup = new FormGroup({
    newPassword: new FormControl('')
  })

  forgotPassword(): void {
    let userEmail = this.forgotForm.value;
    this.email = userEmail.email;

    this._ForgotpassService.forgotPassword(userEmail).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.message;
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message
      }
    });
  }
  resetCode(): void {
    let resetCode = this.resetCodeForm.value;
    this._ForgotpassService.resetCode(resetCode).subscribe({
      next: (response) => {
        this.userMsg = response.status;
        this.step2 = false;
        this.step3 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message
      }
    })
  }
  newPassword(): void {
    let resetForm = this.resetPassword.value;
    resetForm.email = this.email;

    this._ForgotpassService.resetPassword(resetForm).subscribe({
      next: (response) => {
        if(response.token){
          localStorage.setItem('token', response.token);
          this._Router.navigate(['/home']);
        }
      },
      error: (err) =>{
        this.userMsg = err.error.message;
      }
    });
  }
}

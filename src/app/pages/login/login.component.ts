import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth/auth.service';
import { Router } from '@angular/router';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";
import { _} from "@ngx-translate/core";


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  isLoading:boolean = false
  message:string =""


    constructor(private translate: TranslateService) {
    this.translate.get(_('app.hello'), {value: 'world'}).subscribe((res: string) => {
      console.log(res);
    });
  }
login:FormGroup = new FormGroup({
  email:new FormControl(null ,[ Validators.required] ),
  password:new FormControl(null ,[ Validators.required ,Validators.pattern(/^[A-Z]\w{7,}$/)] ),


})
submit():void{
if(this.login.valid){
  this.isLoading = true
    this.authService.sendLoginForm( this.login.value).subscribe({
      
    next:(res)=>{
      console.log(res)
      if(res.message ==="success"){
        localStorage.setItem("token" , res.token)
        this.authService.getUSerData()

        this.router.navigate(['/home' ])

      }
            this.isLoading = false

    }

    ,
    error:(err)=>{
      console.log(err)
       this.message = err.error.message
      this.isLoading = false

    }
  })
}
  
}

}

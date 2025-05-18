import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  isLoading:boolean = false
  message:string =""
register:FormGroup = new FormGroup({
  name:new FormControl(null ,[ Validators.required , Validators.minLength(3), Validators.maxLength(20)]),
  email:new FormControl(null ,[ Validators.required] ),
  password:new FormControl(null ,[ Validators.required ,Validators.pattern(/^[A-Z]\w{7,}$/)] ),
  rePassword:new FormControl(null , [ Validators.required ]),
  phone:new FormControl(null ,[ Validators.required , Validators.pattern(/^01[125][0-9]{8}$/)] ),

} , {validators:this.confirm})
submit():void{
if(this.register.valid){
  this.isLoading = true
    this.authService.sendForm( this.register.value).subscribe({
      
    next:(res)=>{
      console.log(res)
      if(res.message ==="success"){
        this.router.navigate(['/login' ])

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
confirm(group:AbstractControl){
  if(group.get("password")?.value === group.get("rePassword")?.value){
    return null

  }
  else{
    return {misMatch:true}
  }
}


}

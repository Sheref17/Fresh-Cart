import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any
   private readonly router = inject(Router)

  constructor(private httpClient:HttpClient) { }
  sendForm(obj:object):Observable<any>{
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",obj)
  }
   sendLoginForm(obj:object):Observable<any>{
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",obj)
  }
  getUSerData():void{
  
     this.userData =  jwtDecode(localStorage.getItem("token")!)
     console.log(this.userData)
  }
  logOut():void{
    localStorage.removeItem("token")
    this.userData = null
    this.router.navigate(["./login"])
  }
}

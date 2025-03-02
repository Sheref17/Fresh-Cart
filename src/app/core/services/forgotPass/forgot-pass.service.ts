import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envrionment } from '../../envrionment/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassService {

  constructor(private _HttpClient:HttpClient) { }



  forgotPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(`${envrionment}/api/v1/auth/forgotPasswords`,userEmail)
    
  }

  resetCode(resetCode:object):Observable<any>{
    return this._HttpClient.post(`${envrionment}/api/v1/auth/verifyResetCode`,resetCode)
  } 

  resetPassword(resetPassword:object):Observable<any>{
    return this._HttpClient.put(`${envrionment}/api/v1/auth/resetPassword`,resetPassword)
  }
}

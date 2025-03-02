import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { envrionment } from '../../envrionment/environment';

@Injectable({
  providedIn: 'root'
})
export class WhislistService {
  heartNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private httpClient:HttpClient) { }
  addProudctToWhish(id:string):Observable<any>{
    return this.httpClient.post(`${envrionment.baseurl}/api/v1/wishlist` , 
      {
        "productId": id
    }
    )
  }
removeProudctToWhish(id:string):Observable<any>{
    return this.httpClient.delete(`${envrionment.baseurl}/api/v1/wishlist/${id}`)
  }
  getLogged():Observable<any>{
    return this.httpClient.get(`${envrionment.baseurl}/api/v1/wishlist` )
  }
}

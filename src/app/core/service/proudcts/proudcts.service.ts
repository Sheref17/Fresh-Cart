import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProudctsService {

  constructor(private httpClient:HttpClient) {}
   getproudcts():Observable<any>{
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/products")
   }
   getSpecificPro(id:any):Observable<any>{
    return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategriousService {

  constructor(private httpClient:HttpClient) { }
  getCategrious():Observable<any>{
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/categories")
  }
  getSpecificCat(id:any):Observable<any>{
return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }
}

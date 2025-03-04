import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envrionment } from '../envrionment/environment';
import { Ibrands } from '../../shared/Interfaces/ibrands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private httpClient:HttpClient) { }
  getAllBrands():Observable<any>{
    return this.httpClient.get(`${envrionment.baseurl}/api/v1/brands`)
  }
  getSpecificBrands(id:string):Observable<any>{
  
    return this.httpClient.get(`${envrionment.baseurl}/api/v1/brands/${id}`)

  }
}

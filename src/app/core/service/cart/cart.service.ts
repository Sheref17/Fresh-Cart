import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly id = inject(PLATFORM_ID)
  

  constructor(private httpClient:HttpClient) { }


  getCart():Observable<any>{
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/cart" 
    )
  }

  addProudct(id:string):Observable<any>{
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/cart" , {
    "productId": id
} ,
 ) 

  }
  removeItem(id:string):Observable<any>{
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` 

    )
  }
  removeAll():Observable<any>{
    return this.httpClient.delete("https://ecommerce.routemisr.com/api/v1/cart" 
  
    )
  }

  updateCart(id:string , count:number):Observable<any>{
    return this.httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {
    "count":count 
} ,
)
  }
 
}

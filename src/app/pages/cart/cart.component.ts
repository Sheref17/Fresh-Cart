import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/service/cart/cart.service';
import { Icart } from '../../shared/interfaces/icart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
private readonly cartService = inject(CartService)
  cartDetails:Icart = {} as Icart


getCart():void{
  this.cartService.getCart().subscribe({
    next:(res)=>{
      console.log(res.data)
      this.cartDetails = res.data
    }
  })
}
removeItem(id:string):void{
  this.cartService.removeItem(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.cartDetails = res.data
    }
  })
}
updateQuntatiy(id:string , count:number):void{
  console.log("hello")
this.cartService.updateCart(id , count).subscribe({
  next:(res)=>{
    console.log(res)
    this.cartDetails = res.data
  },
  error:(err)=>{
    console.log(err)
  }
})
}
clear():void{
  console.log("hello")
  this.cartService.removeAll().subscribe({
    next:(res)=>{
      console.log(res)
      this.cartDetails = {} as Icart
    }
  })
}

  ngOnInit(): void {
   this.getCart()
  }

}

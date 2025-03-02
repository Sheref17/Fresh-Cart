import { Component, inject, OnInit } from '@angular/core';
import { WhislistService } from '../../core/services/whishlist/whislist.service';
import { Icart } from '../../shared/Interfaces/icart';
import { Iwhish } from '../../shared/Interfaces/iwhish';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-whislist',
  imports: [CurrencyPipe],
  templateUrl: './whislist.component.html',
  styleUrl: './whislist.component.scss'
})
export class WhislistComponent  implements OnInit {
    private readonly whislistService = inject(WhislistService)
     private readonly cartService = inject(CartService)
      private readonly toastrService = inject(ToastrService)
     
    
    whishDetails:Iwhish[] =[]
  
  ngOnInit(): void {

    this.getWhishListData()
  }
  getWhishListData():void{
    this.whislistService.getLogged().subscribe({
      next:(res)=>{
        console.log(res)
        this.whishDetails =res.data

      }
    })

  }
  removeItem(id:string):void{
    this.whislistService.removeProudctToWhish(id).subscribe({
      next:(res)=>{
        this.getWhishListData()
      
      }
    })
  }
  addToCart(id:string):void{


    this.cartService.addProudctToCart(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.toastrService.success(res.message , 'FreshCart')
        this.removeItem(id)

        console.log(this.cartService.cartNumber)
    
      },
      error:(err)=>{
        console.log(err)
      }
    
    })
    }
  

}

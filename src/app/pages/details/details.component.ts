import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProudctsService } from '../../core/service/proudcts/proudcts.service';
import { Iproudcts } from '../../shared/interfaces/Iproudcts';
import { CartService } from '../../core/service/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
private readonly activatedRoute = inject(ActivatedRoute)
private readonly proudctsService = inject(ProudctsService)

private readonly cartService = inject(CartService)
private readonly toastrService = inject(ToastrService)

proudct:Iproudcts = {} as Iproudcts
prodId:any


addToCart(id:string):void{
  this.cartService.addProudct(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.toastrService.success(res.message , "Fresh Cart")
    }
  })
}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      {
        next:(res)=>{
        this.prodId =  res.get("id")
        this.proudctsService.getSpecificPro(this.prodId).subscribe({
          next:(res)=>{
            console.log(res.data)
            this.proudct = res.data

          }
        })

        }
      }
    )
  }

}

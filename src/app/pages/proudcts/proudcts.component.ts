import { Component, inject, OnInit } from '@angular/core';
import { Iproudcts } from '../../shared/interfaces/Iproudcts';
import { ProudctsService } from '../../core/service/proudcts/proudcts.service';
import { CartService } from '../../core/service/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proudcts',
  imports: [RouterLink],
  templateUrl: './proudcts.component.html',
  styleUrl: './proudcts.component.scss'
})
export class ProudctsComponent implements OnInit {
private readonly cartService = inject(CartService)
private readonly toastrService = inject(ToastrService)


private readonly proudctsService = inject(ProudctsService)
getArray(length: number): number[] {
  return Array.from({ length }, (_, i) => i);
}
getAllProudcts():void{
  this.proudctsService.getproudcts().subscribe({
    next:(data)=>{
   
      this.proudcts = data.data
      console.log(this.proudcts)

    },
    error:(err)=>{
     console.log(err)
    }
  })
}
addToCart(id:string):void{
  this.cartService.addProudct(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.toastrService.success(res.message , "Fresh Cart")
    }
  })
}
  proudcts:Iproudcts[] = []
    ngOnInit(): void {
        this.getAllProudcts()

  }
}

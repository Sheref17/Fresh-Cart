import { Component, inject, OnInit } from '@angular/core';
import { ProudctsService } from '../../core/service/proudcts/proudcts.service';
import { Iproudcts } from '../../shared/interfaces/Iproudcts';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategriousService } from '../../core/service/categrious/categrious.service';
import { Icategrious } from '../../shared/interfaces/icategrious';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../core/service/cart/cart.service';
import { FlowbiteService } from '../../core/service/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-home',
  imports: [CarouselModule , RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    constructor(private flowbiteService: FlowbiteService) {}

private readonly toastrService = inject(ToastrService)
private readonly cartService = inject(CartService)


private readonly proudctsService = inject(ProudctsService)
private readonly categriousService = inject(CategriousService)
categrious:Icategrious[] = []
proudcts:Iproudcts[] = []
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    autoplay:true
  }
    subSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplaySpeed:100,
  
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


addToCart(id:string):void{
  this.cartService.addProudct(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.toastrService.success(res.message , "Fresh Cart")
    }
  })
}
getAllCategrious():void{
  this.categriousService.getCategrious().subscribe({
    next:(data)=>{
      console.log(data)
      this.categrious = data.data
    }
    ,
    error:(err)=>{
      console.log(err)
    }
  })
}
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


 
  ngOnInit(): void {
  this.getAllProudcts()
  this.getAllCategrious()
   this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  
  }


}

import { Component, inject, OnInit } from '@angular/core';
import { ProudctsService } from '../../core/services/proudcts/proudcts.service';
import { Iproudcts } from '../../shared/Interfaces/iproudcts';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Icategories } from '../../shared/Interfaces/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CurrencyPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SearchPipe } from '../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { WhislistService } from '../../core/services/whishlist/whislist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, UpperCasePipe ,LowerCasePipe , TitleCasePipe, SlicePipe , CurrencyPipe,SearchPipe , FormsModule ,RouterLink ,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
 private readonly ProudctsService = inject(ProudctsService)
 private readonly whislistService = inject(WhislistService)

 private readonly CategoriesService = inject(CategoriesService)
 private readonly cartService = inject(CartService)
 private readonly toastrService = inject(ToastrService)
 private readonly ngxSpinnerService = inject(NgxSpinnerService)

  wishListData: string[] = [];


 search:string =""
 proudcuts:Iproudcts[] =[]
 categroius:Icategories[]= []
 customMain: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  items:1,

  nav: false
}




 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
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

 getProudcutsData():void{
  this.ngxSpinnerService.show()

  this.ProudctsService.getAllProudcts().subscribe({
    next:(res)=>{
      console.log(res);
      this.proudcuts = res.data;
      this.ngxSpinnerService.hide()

    },
    error:(err)=>{
      console.log(err)
    }
      })
 }
 getCategroiussData():void{


  this.ngxSpinnerService.show()
  this.CategoriesService.getAllCategories().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.categroius = res.data;
      this.ngxSpinnerService.hide()

    },
    error:(err)=>{
      console.log(err)
    }
      })
 }
ngOnInit(): void {
  this.getProudcutsData();
  this.getCategroiussData()
}
getwhishData():void{
  this.whislistService.getLogged().subscribe({
    next:(res)=>{
      const newData = res.data.map((item: any) => item._id);

      this.wishListData = newData
    }
  })
}
addToCart(id:string):void{


this.cartService.addProudctToCart(id).subscribe({
  next:(res)=>{
    console.log(res)
    this.toastrService.success(res.message , 'FreshCart')
    this.ngxSpinnerService.hide()
    this.cartService.cartNumber.next(res.numOfCartItems)
    console.log(this.cartService.cartNumber)

  },
  error:(err)=>{
    console.log(err)
  }

})
}

addHeart(prodId: string ): void {
  this.whislistService.addProudctToWhish(prodId).subscribe({
    next: (response) => {
      console.log(response);
      this.toastrService.success(response.message);
      this.wishListData = response.data;
      this.whislistService.heartNumber.next(response.data.length)
    },
  });
}

removeHeart(prodId: string ): void {
  this.whislistService.removeProudctToWhish(prodId).subscribe({
    next: (response) => {
      console.log(response);
      this.toastrService.success(response.message);
      this.wishListData = response.data;
      this.whislistService.heartNumber.next(response.data.length)
    },
  });
}


}

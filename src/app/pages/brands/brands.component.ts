import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Ibrands } from '../../shared/Interfaces/ibrands';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  brndsDetails:Ibrands[] = []

    private readonly brandsService = inject(BrandsService)
    ngOnInit(): void {
      this.showBrands()
    }
    showBrands():void{
this.brandsService.getAllBrands().subscribe({
  next:(res)=>{
    this.brndsDetails = res.data
    console.log(res)
  }
})
    }
  

}

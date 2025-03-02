import { Component, inject, OnInit } from '@angular/core';
import { Ibrands } from '../../shared/Interfaces/ibrands';
import { BrandsService } from '../../core/services/brands.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-details',
  imports: [],
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.scss'
})
export class BrandDetailsComponent  implements OnInit {
  brandId:any
  brandDetails:Ibrands={ } as Ibrands
  private readonly brandsService = inject(BrandsService)
    private readonly activatedRoute = inject(ActivatedRoute)
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe({
        next:(res)=>{
        this.brandId  =res.get("id")
      this.brandsService.getSpecificBrands(this.brandId).subscribe({
        next:(res)=>{
          this.brandDetails =  res.data
    
        },
        error:(err)=>{
          console.log(err)
    
        }
      })
        },
        error:(err)=>{
          console.log(err)

    
        }
      })
      
    }

}

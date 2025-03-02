import { Component, inject, OnInit } from '@angular/core';
import { Icategories } from '../../shared/Interfaces/icategories';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { ActivatedRoute } from '@angular/router';
import { Isubcategrious } from '../../shared/Interfaces/isubcategrious';

@Component({
  selector: 'app-sub',
  imports: [],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.scss'
})
export class SubComponent  implements OnInit{
  catId:any

  catDetails:Isubcategrious={ } as Icategories
  private readonly brandsService = inject(CategoriesService)
    private readonly activatedRoute = inject(ActivatedRoute)
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe({
        next:(res)=>{
        this.catId  =res.get("id")
      this.brandsService.getSpecificCategories(this.catId).subscribe({
        next:(res)=>{
          this.catDetails =  res.data

    
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

import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Icategories } from '../../shared/Interfaces/icategories';
import { Isubcategrious } from '../../shared/Interfaces/isubcategrious';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit 
{
 private readonly CategoriesService = inject(CategoriesService)
  
 categroius:Icategories[]= []
 subCategroius:Isubcategrious[]= []


 
 ngOnInit(): void {
  this.getCategroiussData()
  this.getSubCategroiussData()
}

 getCategroiussData():void{


  this.CategoriesService.getAllCategories().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.categroius = res.data;

    },
    error:(err)=>{
      console.log(err)
    }
      })
 }
 getSubCategroiussData():void{


  this.CategoriesService.getAllSubCategories().subscribe({
    next:(res)=>{
      console.log(res.data);
this.subCategroius = res.data

    },
    error:(err)=>{
      console.log(err)
    }
      })
 }



  
}

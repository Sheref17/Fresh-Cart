import { Component, inject, OnInit } from '@angular/core';
import { CategriousService } from '../../core/service/categrious/categrious.service';
import { Icategrious } from '../../shared/interfaces/icategrious';

@Component({
  selector: 'app-categrious',
  imports: [],
  templateUrl: './categrious.component.html',
  styleUrl: './categrious.component.scss'
})
export class CategriousComponent implements OnInit {
categrious:Icategrious[] = []
private readonly categriousService = inject(CategriousService)
getAllCategrious():void{
  this.categriousService.getCategrious().subscribe({
    next:(data)=>{
      this.categrious = data.data
      
    }
  })
}





ngOnInit(): void {
  this.getAllCategrious()
}
}

import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/service/auth/auth.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../core/service/flowbite/flowbite.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive , TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  implements OnInit{
  readonly authService = inject(AuthService) 
  isLogin = input<boolean>(true);
  private readonly translate = inject(TranslateService)
  currentlan:string = "" 
  useLanguage(language: string): void {
    this.translate.use(language);
   this.currentlan = language 
     this.translate.use(language);
  this.currentlan = language;


  const dir = language === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = language;


  localStorage.setItem('lang', language);

}
  constructor(private flowbiteService: FlowbiteService) {}
  ngOnInit(): void {
      const savedLang = localStorage.getItem('lang') || 'en';
  this.useLanguage(savedLang); 
  
  }
  ngAfterViewInit(): void {
  this.flowbiteService.loadFlowbite(() => {
    initFlowbite();
  });
  }

}

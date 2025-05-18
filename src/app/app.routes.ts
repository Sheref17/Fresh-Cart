import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuard } from './core/guards/logged.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((m) => m.LoginComponent),
        title: 'login',
        canActivate:[loggedGuard  ]
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.component').then((m) => m.RegisterComponent),
        title: 'register'
      }
    ]
  },

  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'home',
        canActivate:[authGuard]
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.component').then((m) => m.CartComponent),
        title: 'cart'
      },
      {
        path: 'proudcts',
        loadComponent: () =>
          import('./pages/proudcts/proudcts.component').then((m) => m.ProudctsComponent),
        title: 'proudcts'
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./pages/details/details.component').then((m) => m.DetailsComponent),
        title: 'details'
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./pages/brands/brands.component').then((m) => m.BrandsComponent),
        title: 'brands'
      },
      {
        path: 'categrious',
        loadComponent: () =>
          import('./pages/categrious/categrious.component').then((m) => m.CategriousComponent),
        title: 'categrious'
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/checkout/checkout.component').then((m) => m.CheckoutComponent),
        title: 'checkout'
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/notfound/notfound.component').then((m) => m.NotfoundComponent),
        title: 'notfound'
      }
    ]
  }
];

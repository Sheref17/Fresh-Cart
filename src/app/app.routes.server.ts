import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
   {
    path: 'details/:id',
    renderMode: RenderMode.Client
  },
    {
    path: 'home',
    renderMode: RenderMode.Client
  }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module')
      .then(m => m.GalleryModule),
  },
  {
    path: 'gallery/:category',
    loadChildren: () => import('./pages/photos/photos.module')
      .then(m => m.PhotosModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module')
      .then(m => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

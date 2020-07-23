import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  },
  {
    path: 'shop',
    loadChildren: () => import('./page/shop-list/shop-list.module').then( m => m.ShopListPageModule)
  },
  {
    path: 'shop/add',
    loadChildren: () => import('./page/shop-add/shop-add.module').then( m => m.ShopAddPageModule)
  },
  {
    path: 'shop-scheduling',
    loadChildren: () => import('./page/shop-scheduling/shop-scheduling-list/shop-scheduling-list.module').then( m => m.ShopscheduleListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

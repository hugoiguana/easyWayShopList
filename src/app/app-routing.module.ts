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
    loadChildren: () => import('./page/shop/shop-list/shop-list.module').then( m => m.ShopListPageModule)
  },
  {
    path: 'shop/add',
    loadChildren: () => import('./page/shop/shop-add/shop-add.module').then( m => m.ShopAddPageModule)
  },
  {
    path: 'shop-scheduling/:shopIdOff',
    loadChildren: () => import('./page/shop-scheduling/shop-scheduling-list/shop-scheduling-list.module').then( m => m.ShopscheduleListPageModule)
  },
  {
    path: 'shop-scheduling/:shopIdOff/add',
    loadChildren: () => import('./page/shop-scheduling/shop-scheduling-add/shop-scheduling-add.module').then( m => m.ShopSchedulingAddPageModule)
  },  
  {
    path: 'shop-items/:idOffShopScheduling',
    loadChildren: () => import('./page/shop-items/shop-items-list/shop-items-list.module').then( m => m.ShopItemsListPageModule)
  },
  {
    path: 'shop-items/:idOffShopScheduling/add',
    loadChildren: () => import('./page/shop-items/shop-items-add/shop-items-add.module').then( m => m.ShopItemsAddPageModule)
  },

  {
    path: 'product',
    loadChildren: () => import('./page/product/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product/add',
    loadChildren: () => import('./page/product/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

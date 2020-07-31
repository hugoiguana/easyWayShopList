import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop-list/shop-list.module').then( m => m.ShopListPageModule)
      },
      {
        path: 'shop/add',
        loadChildren: () => import('../shop/shop-add/shop-add.module').then( m => m.ShopAddPageModule)
      },
      {
        path: 'shop-scheduling/:shopIdOff',
        loadChildren: () => import('../shop-scheduling/shop-scheduling-list/shop-scheduling-list.module').then( m => m.ShopscheduleListPageModule)
      },
      {
        path: 'shop-scheduling/:shopIdOff/add',
        loadChildren: () => import('../shop-scheduling/shop-scheduling-add/shop-scheduling-add.module').then( m => m.ShopSchedulingAddPageModule)
      },  
      {
        path: 'shop-items/:idOffShopScheduling',
        loadChildren: () => import('../shop-items/shop-items-list/shop-items-list.module').then( m => m.ShopItemsListPageModule)
      },
      {
        path: 'shop-items/:idOffShopScheduling/add',
        loadChildren: () => import('../shop-items/shop-items-add/shop-items-add.module').then( m => m.ShopItemsAddPageModule)
      },    
      {
        path: 'product',
        loadChildren: () => import('../product/product-list/product-list.module').then( m => m.ProductListPageModule)
      },
      {
        path: 'product/add',
        loadChildren: () => import('../product/product-add/product-add.module').then( m => m.ProductAddPageModule)
      },
      {
        path: 'product-category',
        loadChildren: () => import('../product/product-category-list/product-category-list.module').then( m => m.ProductCategoryListPageModule)
      },
      {
        path: 'product-category/add',
        loadChildren: () => import('../product/product-category-add/product-category-add.module').then( m => m.ProductCategoryAddPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/shop'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

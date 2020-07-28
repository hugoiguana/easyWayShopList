import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCategoryAddPage } from './product-category-add.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCategoryAddPage
  },
  {
    path: ':idOff',
    component: ProductCategoryAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategoryAddPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCategoryListPage } from './product-category-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCategoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategoryListPageRoutingModule {}

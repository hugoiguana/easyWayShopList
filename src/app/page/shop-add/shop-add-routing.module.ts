import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopAddPage } from './shop-add.page';

const routes: Routes = [
  {
    path: '',
    component: ShopAddPage
  },
  {
    path: ':idoff',
    component: ShopAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopAddPageRoutingModule {}

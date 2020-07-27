import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopItemsAddPage } from './shop-items-add.page';

const routes: Routes = [
  {
    path: '',
    component: ShopItemsAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopItemsAddPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopItemsListPage } from './shop-items-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShopItemsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopItemsListPageRoutingModule {}

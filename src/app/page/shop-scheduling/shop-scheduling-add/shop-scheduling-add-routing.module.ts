import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopSchedulingAddPage } from './shop-scheduling-add.page';

const routes: Routes = [
  {
    path: '',
    component: ShopSchedulingAddPage
  },
  {
    path: ':idOff',
    component: ShopSchedulingAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopSchedulingAddPageRoutingModule {}

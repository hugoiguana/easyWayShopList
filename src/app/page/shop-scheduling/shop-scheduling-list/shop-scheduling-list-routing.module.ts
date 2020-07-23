import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopSchedulingListPage } from './shop-scheduling-list.page';

const routes: Routes = [
  {
    path: ':shopIdOff',
    component: ShopSchedulingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopscheduleListPageRoutingModule {}

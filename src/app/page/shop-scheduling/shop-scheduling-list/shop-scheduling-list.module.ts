import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ShopscheduleListPageRoutingModule } from './shop-scheduling-list-routing.module';
import { ShopSchedulingListPage } from './shop-scheduling-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopscheduleListPageRoutingModule
  ],
  declarations: [ShopSchedulingListPage]
})
export class ShopscheduleListPageModule {}

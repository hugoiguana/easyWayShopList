import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopSchedulingAddPageRoutingModule } from './shop-scheduling-add-routing.module';

import { ShopSchedulingAddPage } from './shop-scheduling-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopSchedulingAddPageRoutingModule
  ],
  declarations: [ShopSchedulingAddPage]
})
export class ShopSchedulingAddPageModule {}

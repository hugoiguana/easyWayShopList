import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopAddPageRoutingModule } from './shop-add-routing.module';

import { ShopAddPage } from './shop-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShopAddPageRoutingModule
  ],
  declarations: [ShopAddPage]
})
export class ShopAddPageModule {}

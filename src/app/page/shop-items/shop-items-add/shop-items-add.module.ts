import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ShopItemsAddPageRoutingModule } from './shop-items-add-routing.module';
import { ShopItemsAddPage } from './shop-items-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopItemsAddPageRoutingModule
  ],
  declarations: [ShopItemsAddPage]
})
export class ShopItemsAddPageModule {}

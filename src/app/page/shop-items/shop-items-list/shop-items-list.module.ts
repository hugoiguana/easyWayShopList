import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopItemsListPageRoutingModule } from './shop-items-list-routing.module';

import { ShopItemsListPage } from './shop-items-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopItemsListPageRoutingModule
  ],
  declarations: [ShopItemsListPage]
})
export class ShopItemsListPageModule {}

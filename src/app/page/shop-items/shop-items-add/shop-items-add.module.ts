import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ShopItemsAddPageRoutingModule } from './shop-items-add-routing.module';
import { ShopItemsAddPage } from './shop-items-add.page';
import { ProductModalSearchbarComponent } from 'src/app/components/product/product-modal-searchbar/product-modal-searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopItemsAddPageRoutingModule
  ],
  declarations: [ShopItemsAddPage, ProductModalSearchbarComponent],
  entryComponents: [ProductModalSearchbarComponent]
})
export class ShopItemsAddPageModule {}

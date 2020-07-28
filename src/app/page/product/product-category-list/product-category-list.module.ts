import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCategoryListPageRoutingModule } from './product-category-list-routing.module';

import { ProductCategoryListPage } from './product-category-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCategoryListPageRoutingModule
  ],
  declarations: [ProductCategoryListPage]
})
export class ProductCategoryListPageModule {}

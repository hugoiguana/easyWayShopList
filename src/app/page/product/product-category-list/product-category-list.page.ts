import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { LoadingService } from 'src/app/service/common/loading.service';
import { AlertService } from 'src/app/service/common/alert.service';
import { ProductCategoryService } from 'src/app/service/product-category.service';
import { ProductCategory } from 'src/app/model/product-category';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.page.html',
  styleUrls: ['./product-category-list.page.scss'],
})
export class ProductCategoryListPage implements OnInit {

  allItems : ProductCategory[] = [];
  items : ProductCategory[] = [];

  constructor(
      private loading: LoadingService
    , private alert: AlertService
    , private service : ProductCategoryService
    , private router: Router
    ) { }

  ngOnInit() {
   
  }
   
  async delete(idOff: string) {          
      const funcAfterDelete = () => {
        this.service.delete(idOff).then(i => {    
          this.loadShops();
        });
      }
      await this.alert.confirmDelete(funcAfterDelete);
  } 

  async loadShops() {
   await this.loading.show();
    this.service.findAll().then(categories => {
      this.allItems = categories as ProductCategory[];
      this.allItems = _.orderBy(this.allItems, 'name', 'asc');
      this.items = this.allItems;
      this.loading.hide();
    });
  }

  filterCategory(event) {
    const categoryName = event.target.value;    
    if (categoryName && categoryName.trim() != '') {
      this.items = _.values(this.items);      
      this.items = this.allItems.filter(p => {
        return (p.name.toLowerCase().indexOf(categoryName.toLowerCase()) > -1)
      });
      
      if (this.items) {          
        this.items = _.orderBy(this.items, 'name', 'asc');
      }    
    } else {
      this.items = this.allItems;
    }      
  }

  ionViewDidEnter() {
    this.loadShops();
  }

}

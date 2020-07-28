import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { LoadingService } from 'src/app/service/common/loading.service';
import { AlertService } from 'src/app/service/common/alert.service';
import { ShopItems } from 'src/app/model/shop-items';
import { ShopItemsService } from 'src/app/service/shop-items.service';

@Component({
  selector: 'app-shop-items-list',
  templateUrl: './shop-items-list.page.html',
  styleUrls: ['./shop-items-list.page.scss'],
})
export class ShopItemsListPage implements OnInit {

  idOffShopScheduling: string;
  items : ShopItems[] = [];
  allItems : ShopItems[] = [];
  totalPriceAllItems : number = 0;

  constructor(private route: ActivatedRoute
    , private router: Router
    , private loading: LoadingService
    , private alert: AlertService
    , private service: ShopItemsService) { }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.idOffShopScheduling = params.get('idOffShopScheduling');  
        this.loadItems();
      });
    }
  
    async delete(idOff: string) {          
      const funcAfterDelete = () => {
        this.service.delete(idOff).then(i => {    
          this.loadItems();
        });
      }
      await this.alert.confirmDelete(funcAfterDelete);
    } 
  
    async loadItems() {
      //await this.loading.show();
        this.service.findAll(this.idOffShopScheduling).then(items => {
          this.allItems = this.orderItemsByProductCategoryName(items);
          this.items = this.allItems;
          this.calculateTotalPriceAllItems(this.items);
          //this.loading.hide();          
        });
    }

    
    calculateTotalPriceAllItems(items: ShopItems[]) {
      if (items && !_.isEmpty(items)) {
        this.totalPriceAllItems = _.reduce(items, function(x, product) {
          return x + product.price * product.quantity;
        }, 0);
      }
    }
    
    filterItem(event) {
      const itemSearch = event.target.value;
      
      if (itemSearch && itemSearch.trim() != '') {
        this.items = _.values(this.items);
        this.items = this.allItems.filter(item => {
          return (item.product.name.toLowerCase().indexOf(itemSearch.toLowerCase()) > -1)
          || (item.product.category.name.toLowerCase().indexOf(itemSearch.toLowerCase()) > -1)
        });                    
      } else {
        this.items = this.allItems;
      }    
      this.calculateTotalPriceAllItems(this.items);
    }
    
    orderItemsByProductCategoryName(items: ShopItems[]) : ShopItems[] {
      return _.orderBy(items, 'product.category.name', 'desc');
    }
    
    ionViewDidEnter() {
      this.loadItems();
    }

}

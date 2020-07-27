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
  
    onClick(idOff: string) {    
      //this.router.navigate(['product', 'add', this.idOffShopScheduling, idOff]);   
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
    await this.loading.show();
      this.service.findAll(this.idOffShopScheduling).then(i => {
        this.items = _.orderBy(i, 'dtCriation', 'desc');
        this.loading.hide();
      });
    }
    
    ionViewDidEnter() {
      this.loadItems();
    }

}

import { Component, OnInit } from '@angular/core';

import { Shop } from 'src/app/model/shop';
import { ShopService } from 'src/app/service/shop.service';
import { LoadingService } from 'src/app/service/common/loading.service';
import { AlertService } from 'src/app/service/common/alert.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {

  shops : Shop[] = [];

  constructor(
      private loading: LoadingService
    , private alert: AlertService
    , private service : ShopService
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
    this.service.findAll().then(i => {
      this.shops = i as Shop[];
      this.loading.hide();
    });
  }

  ionViewDidEnter() {
    this.loadShops();
  }

}

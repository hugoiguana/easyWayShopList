import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { LoadingService } from 'src/app/service/common/loading.service';
import { AlertService } from 'src/app/service/common/alert.service';
import { ShopScheduling } from 'src/app/model/shop-scheduling';
import { ShopSchedulingService } from 'src/app/service/shopscheduling.service';

@Component({
  selector: 'app-shop-scheduling-list',
  templateUrl: './shop-scheduling-list.page.html',
  styleUrls: ['./shop-scheduling-list.page.scss'],
})
export class ShopSchedulingListPage implements OnInit {

  shopIdOff: string;
  items : ShopScheduling[] = [];

  constructor(
      private route: ActivatedRoute
    , private router: Router
    , private loading: LoadingService
    , private alert: AlertService
    , private service : ShopSchedulingService    
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.shopIdOff = params.get('shopIdOff');  
    });

  }

  onClick(idOff: string) {    
    this.router.navigate(['shop-items', idOff]);   
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
    this.service.findAll(this.shopIdOff).then(i => {
      const itemsOrder = i as ShopScheduling[];
      this.items = _.orderBy(itemsOrder, 'dtScheduling', 'desc');
      this.loading.hide();
    });
  }

  ionViewDidEnter() {
    this.loadItems();
  }

}

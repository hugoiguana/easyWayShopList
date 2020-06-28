import { Component, OnInit, OnDestroy } from '@angular/core';

import { Shop } from 'src/app/model/shop';
import { ShopService } from 'src/app/service/shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit, OnDestroy {

  shops : Shop[] = [];
  shopFindAllSubscription : Subscription;

  constructor(private service : ShopService) { }

  ngOnInit() {

    console.log('inicio')
    const shop = {
      'id': '1',
      'name': 'Feira do mês',
      'dtCriation': null,
      'dtModification': null,
    } as Shop;

    //this.service.clear();

 /*    this.service.addItem(shop).then(x => {
       this.service.findAll().then(i => {
          this.shops = i as Shop[];
        });
    }); */
   
    this.service.findAll().then(i => {
      this.shops = i as Shop[];
    });

  }

  delete() {

  }

  ngOnDestroy() {
    this.shopFindAllSubscription.unsubscribe();
  }

}

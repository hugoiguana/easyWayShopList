import { Component, OnInit } from '@angular/core';

import { Shop } from 'src/app/model/shop';
import { ShopService } from 'src/app/service/shop.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {

  shops : Shop[] = [];

  constructor(private service : ShopService, private storageService: StorageService) { }

  ngOnInit() {

    console.log('inicio')
    const shop = {
      'id': '1',
      'name': 'Feira do mês',
      'dtCriation': null,
      'dtModification': null,
    } as Shop;

    this.storageService.clear();

 /*    this.service.addItem(shop).then(x => {
       this.service.findAll().then(i => {
          this.shops = i as Shop[];
        });
    }); */
   
  }

  delete() {

  }

  ionViewDidEnter() {
    this.service.findAll().then(i => {
      this.shops = i as Shop[];
      //this.shops.forEach(x => console.log(x));
    });
  }

}

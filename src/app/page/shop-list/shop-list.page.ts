import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Shop } from 'src/app/model/shop';
import { ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {

  shops : Shop[] = [];

  constructor(public alertController: AlertController
    , private service : ShopService
    ) { }

  ngOnInit() {
   
  }

  
  async delete(idOff: string) {          

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Atenção',
        subHeader: '',
        message: 'Confirma exclusão?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            cssClass: 'secondary',
          }, {
            text: 'Sim',
            handler: () => {
              this.service.delete(idOff).then(i => {    
                this.loadShops();
              });
            }
          }
        ]
      });
  
      await alert.present();
  } 

  loadShops() {
    this.service.findAll().then(i => {
      this.shops = i as Shop[];
    });
  }

  ionViewDidEnter() {
    this.loadShops();
  }

}

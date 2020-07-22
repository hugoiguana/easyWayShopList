import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Shop } from 'src/app/model/shop';
import { ShopService } from 'src/app/service/shop.service';
import { LoadingService } from 'src/app/service/common/loading.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {

  shops : Shop[] = [];

  constructor(public alertController: AlertController
    , public loading: LoadingService
    , private service : ShopService
    ) { }

  ngOnInit() {
   
  }

  
  async delete(idOff: string) {          

      const alert = await this.alertController.create({
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

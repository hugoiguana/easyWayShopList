import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoadingService } from 'src/app/service/common/loading.service';
import { ShopItemsService } from 'src/app/service/shop-items.service';
import { ShopItems } from 'src/app/model/shop-items';

@Component({
  selector: 'app-shop-items-add',
  templateUrl: './shop-items-add.page.html',
  styleUrls: ['./shop-items-add.page.scss'],
})
export class ShopItemsAddPage implements OnInit {
  
  idOffShopScheduling: string;
  idOff: string;
  idOffProduct: string;
  productName: string;
  quantity: number = 0;
  price: number = 0;
  totalPrice: number = 0;

  products = [{
    idOffProduct : 'aaa',
    productName : 'Biscoito'
  },
  {
    idOffProduct : 'bbb',
    productName : 'Macarrão'
  },
  {
    idOffProduct : 'ccc',
    productName : 'Feijão'
  }];

  constructor(private router: Router
    , private route: ActivatedRoute
    , private loading: LoadingService
    , private service: ShopItemsService) { }


    ngOnInit() {

      this.route.paramMap.subscribe(params => {
        this.idOffShopScheduling = params.get('idOffShopScheduling'); 
        this.idOff = params.get('idOff');      
  
        this.service.findByIdOff(this.idOff).then(x => {
          if (x) {
            const entity = x as ShopItems;
            this.quantity = entity.quantity;
            this.price = entity.price;
          }
        });
      });
  
    }
  
    async onSubmit() {
      await this.loading.show();
      let shopItems = ShopItems.of(this.idOff); 
      shopItems.idOffShopScheduling = this.idOffShopScheduling;
      shopItems.idOffProduct = this.idOffProduct;
      shopItems.quantity = this.quantity;
      shopItems.price = this.price;
      this.service.save(shopItems).then(x => {
        this.loading.hide();
        this.router.navigate(['shop-items', this.idOffShopScheduling]);      
      });
    }

  
}

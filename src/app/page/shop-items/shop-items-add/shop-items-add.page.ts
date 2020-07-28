import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, switchMap, debounce } from 'rxjs/operators';
import { of } from 'rxjs';
import * as _ from 'lodash';

import { LoadingService } from 'src/app/service/common/loading.service';
import { ShopItemsService } from 'src/app/service/shop-items.service';
import { ShopItems } from 'src/app/model/shop-items';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-shop-items-add',
  templateUrl: './shop-items-add.page.html',
  styleUrls: ['./shop-items-add.page.scss'],
})
export class ShopItemsAddPage implements OnInit {
  
  productNameSearch: string;

  idOffShopScheduling: string;
  idOff: string;
  idOffProduct: string;
  shopItems: ShopItems;
  
  products;

  allProducts = [{
    idOff : 'aaa',
    name : 'Biscoito',    
    category : {
      idOff : 'aaa' ,
      name : 'Lanche'
    }
  },
  {
    idOff : 'bbb',
    name : 'Macarrão',
    category : {
      idOff : 'bbb' ,
      name : 'Almoço'
    }
  },
  {
    idOff : 'ccc',
    name : 'Feijão',
    category : {
      idOff : 'ccc' ,
      name : 'Almoço'
    }
  }];

  constructor(private router: Router
    , private route: ActivatedRoute
    , private loading: LoadingService
    , private modalController: ModalController
    , private service: ShopItemsService) {

      this.shopItems = ShopItems.empty();
      this.shopItems.product = Product.empty();
     }


    ngOnInit() {

      this.route.paramMap.subscribe(params => {
        this.idOffShopScheduling = params.get('idOffShopScheduling'); 
        this.idOff = params.get('idOff');      
  
        console.log('idOff', this.idOff)
        this.service.findByIdOff(this.idOff).then(x => {
          if (x) {
            this.shopItems = x as ShopItems;
            console.log(this.shopItems)
          }
        });
      });

      this.products = this.allProducts;  
    }
      
    async openProductAddPage() {
      this.router.navigate(['product', 'add']);
    }
    
    filterProductName(event) {
      const productName = event.target.value;
      if (productName && productName.trim() != '') {
        this.products = _.values(this.products);
        this.products = this.allProducts.filter(p => {
          return (p.name.toLowerCase().indexOf(productName.toLowerCase()) > -1)
        });
        
        if (this.products) {          
          this.products = _.orderBy(this.products, 'name', 'asc');
          const product = _.first(this.products);
          this.idOffProduct = product.idOff;
        }    
      } else {
        this.products = this.allProducts;
      }
      
    }
    
    async onSubmit() {
      await this.loading.show();

      this.shopItems.idOff = this.idOff;
      this.shopItems.idOffShopScheduling = this.idOffShopScheduling;
      
      this.shopItems.product = _.find(this.allProducts, x => {
        return x.idOff === this.idOffProduct
      });

      console.log('shopItems = ', this.shopItems); 

      this.service.save(this.shopItems).then(x => {
        this.loading.hide();
        this.router.navigate(['shop-items', this.idOffShopScheduling]);      
      });
    }
  
}

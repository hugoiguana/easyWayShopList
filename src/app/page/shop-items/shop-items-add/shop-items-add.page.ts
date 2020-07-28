import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { LoadingService } from 'src/app/service/common/loading.service';
import { ShopItemsService } from 'src/app/service/shop-items.service';
import { ShopItems } from 'src/app/model/shop-items';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shop-items-add',
  templateUrl: './shop-items-add.page.html',
  styleUrls: ['./shop-items-add.page.scss'],
})
export class ShopItemsAddPage implements OnInit {
  
  productNameSearch: string;

  idOffShopScheduling: string;
  idOff: string;
  shopItems: ShopItems;
  
  products;
  allProducts : Product[] = [];

  constructor(private router: Router
    , private route: ActivatedRoute
    , private loading: LoadingService
    , private service: ShopItemsService
    , private productService: ProductService) {

      this.shopItems = ShopItems.empty();      
  }


  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.idOffShopScheduling = params.get('idOffShopScheduling'); 
      this.idOff = params.get('idOff');      

      this.service.findByIdOff(this.idOff).then(x => {
        if (x) {
          this.shopItems = x as ShopItems;
        }
      });

      this.productService.findAll().then(products => {
        this.allProducts = products;
        this.allProducts = _.orderBy(this.allProducts, 'name', 'asc');
        this.products = this.allProducts;

        this.route.queryParamMap.subscribe(p => {
          const idOffProduct = p.get('idOffProduct');
          this.shopItems.product = this.allProducts.find(p => { return p.idOff === idOffProduct});
        });
      });

    });

    this.products = this.allProducts;  
  }
      
    async openProductAddPage() {
      this.router.navigate(['product', 'add'], { queryParams: { idOffShopScheduling: this.idOffShopScheduling } });
    }
    
    filterProductName(event) {
      const productName = event.target.value;
      if (productName && productName.trim() != '') {
        this.products = _.values(this.products);
        this.products = this.allProducts.filter(p => {
          return (p.name.toLowerCase().indexOf(productName.toLowerCase()) > -1)
        });
        
        this.shopItems.product = null;
        if (this.products) {          
          this.products = _.orderBy(this.products, 'name', 'asc');
          this.shopItems.product = _.first(this.products);
        }    
      } else {
        this.products = this.allProducts;
      }      
    }
    
    async onSubmit() {
      await this.loading.show();

      this.shopItems.idOff = this.idOff;
      this.shopItems.idOffShopScheduling = this.idOffShopScheduling;    

      this.service.save(this.shopItems).then(x => {
        this.loading.hide();
        this.router.navigate(['shop-items', this.idOffShopScheduling]);      
      }); 
    }
  
}

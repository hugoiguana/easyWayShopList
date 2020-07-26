import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { LoadingService } from 'src/app/service/common/loading.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

  idOffShopScheduling: string;
  idOff: string;
  name: string;
  quantity: number = 0;
  price: number = 0;
  totalPrice: number = 0;

  constructor(private router: Router
    , private route: ActivatedRoute
    , private loading: LoadingService
    , private service: ProductService) { }

    ngOnInit() {

      this.route.paramMap.subscribe(params => {
        this.idOffShopScheduling = params.get('idOffShopScheduling'); 
        this.idOff = params.get('idOff');      
  
        this.service.findByIdOff(this.idOff).then(x => {
          if (x) {
            const entity = x as Product;
            this.name = entity.name;
            this.quantity = entity.quantity;
            this.price = entity.price;
          }
        });
      });
  
    }
  
    async onSubmit() {
      await this.loading.show();
      let product = Product.of(this.idOff, this.name); 
      product.quantity = this.quantity;
      product.price = this.price;
      this.service.save(product).then(x => {
        this.loading.hide();
        this.router.navigate(['product', this.idOffShopScheduling]);      
      });
    }

}

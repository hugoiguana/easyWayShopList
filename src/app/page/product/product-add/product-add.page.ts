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

  idOff: string;
  name: string;

  constructor(private router: Router
    , private route: ActivatedRoute
    , private loading: LoadingService
    , private service: ProductService) { }

    ngOnInit() {

      this.route.paramMap.subscribe(params => {
        this.idOff = params.get('idOff');      
  
        this.service.findByIdOff(this.idOff).then(x => {
          if (x) {
            const entity = x as Product;
            this.name = entity.name;
          }
        });
      });
  
    }
  
    async onSubmit() {
      await this.loading.show();
      let product = Product.of(this.idOff, this.name); 
      this.service.save(product).then(x => {
        this.loading.hide();
        this.router.navigate(['product']);      
      });
    }

}

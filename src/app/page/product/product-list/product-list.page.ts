import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { LoadingService } from 'src/app/service/common/loading.service';
import { AlertService } from 'src/app/service/common/alert.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  idOffShopScheduling: string;
  items : Product[] = [];

  constructor(private route: ActivatedRoute
    , private router: Router
    , private loading: LoadingService
    , private alert: AlertService
    , private service: ProductService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idOffShopScheduling = params.get('shopSchedulingIdOff');  
    });
  }

  onClick(idOff: string) {    
    this.router.navigate(['product', 'add', this.idOffShopScheduling, idOff]);   
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
  this.service.findAll().then(i => {
    this.items = _.orderBy(i, 'name', 'asc');
    console.log(this.items)
    this.loading.hide();
  });
}

ionViewDidEnter() {
  this.loadItems();
}

}

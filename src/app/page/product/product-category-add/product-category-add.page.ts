import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoadingService } from 'src/app/service/common/loading.service';
import { ProductCategory } from 'src/app/model/product-category';
import { ProductCategoryService } from 'src/app/service/product-category.service';

@Component({
  selector: 'app-product-category-add',
  templateUrl: './product-category-add.page.html',
  styleUrls: ['./product-category-add.page.scss'],
})
export class ProductCategoryAddPage implements OnInit {

  idOff: string;
  productCategory: ProductCategory;

  constructor(private router: Router
    , private route: ActivatedRoute
    , private loading: LoadingService
    , private service: ProductCategoryService) { 

    this.productCategory = ProductCategory.empty();
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.idOff = params.get('idOff');     
      this.service.findByIdOff(this.idOff).then(x => {
        if (x) {
          this.productCategory = x as ProductCategory;
        }
      });
    });

  }

  async onSubmit() {
    await this.loading.show();
    this.service.save(this.productCategory).then(x => {
      this.loading.hide();
      this.router.navigate(['product-category']);      
    });
  }

}

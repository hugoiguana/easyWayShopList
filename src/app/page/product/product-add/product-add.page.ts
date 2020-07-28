import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';

import { LoadingService } from 'src/app/service/common/loading.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { ProductCategory } from 'src/app/model/product-category';
import { ProductCategoryService } from 'src/app/service/product-category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

  idOff: string;
  product: Product;

  idOffCategory: string;
  allCategories : ProductCategory[];
  categories : ProductCategory[];

  idOffShopScheduling: string;

  constructor(private router: Router
    , private route: ActivatedRoute
    , private loading: LoadingService
    , private service: ProductService
    , private categoryService: ProductCategoryService) { }

    ngOnInit() {

      this.product = Product.empty();      

      this.route.queryParamMap.subscribe(p => {
          this.idOffShopScheduling = p.get('idOffShopScheduling');
      });

      this.route.paramMap.subscribe(p => {
        this.idOff = p.get('idOff');      
  
        this.service.findByIdOff(this.idOff).then(x => {
          if (x) {
            this.product = x as Product;
          }
        });

        this.categoryService.findAll().then(x => {
          this.allCategories = x;
          this.categories = x;
        });

      });  
    }

    filterCategory(event) {
      const categoryName = event.target.value;
      if (categoryName && categoryName.trim() != '') {
        this.categories = _.values(this.categories);
        this.categories = this.allCategories.filter(p => {
          return (p.name.toLowerCase().indexOf(categoryName.toLowerCase()) > -1)
        });
        
        if (this.categories) {          
          this.categories = _.orderBy(this.categories, 'name', 'asc');
          const category = _.first(this.categories);
          if (category) {
            this.product.category = category;
          } else {
            this.product.category = null;
          }
        }    
      } else {
        this.categories = this.allCategories;
      }      
    }
  
    openCategoryAddPage() {
      this.router.navigate(['product-category', 'add']);
    }

    async onSubmit() {
      await this.loading.show();      

      this.product.category = _.find(this.allCategories, x => {
        return x.idOff === this.product.category.idOff
      });

      this.service.save(this.product).then(product => {
        this.loading.hide();
        this.navigateTo(product);        
      });

    }

    navigateTo(product: Product) {
      if (this.idOffShopScheduling) {
        this.router.navigate(['shop-items', this.idOffShopScheduling, 'add'], { queryParams: { idOffProduct: product.idOff } });      
      } else {
        this.router.navigate(['product']);      
      }
    }

}

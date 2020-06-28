import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/service/shop.service';
import { Shop } from 'src/app/model/shop';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.page.html',
  styleUrls: ['./shop-add.page.scss'],
})
export class ShopAddPage implements OnInit {

  formShop : FormGroup;
  shopName: string;

  constructor(private router: Router
    , private fb : FormBuilder
    , private service : ShopService) { 

      this.formShop =  this.fb.group({
        name: this.fb.control('', Validators.required)      
      });

    }

  ngOnInit() {
  }

  onSubmit() {
    const shop = Shop.of(this.shopName);
    this.service.save(shop).then(x => {
      this.router.navigate(['shop']);      
    });
  }

}

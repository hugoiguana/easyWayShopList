import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ShopService } from 'src/app/service/shop.service';
import { Shop } from 'src/app/model/shop';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.page.html',
  styleUrls: ['./shop-add.page.scss'],
})
export class ShopAddPage implements OnInit {

  idOff: string;
  shopName: string;

  constructor(private router: Router
    , private route: ActivatedRoute
    , private service : ShopService) { 
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.idOff = params.get('idoff');      
      this.service.findByIdOff(this.idOff).then(x => {
        if (x) {
          const shop = x as Shop;
          this.shopName = shop.name;
        }
      });
    });

  }

  onSubmit() {
    let shop = Shop.of(this.idOff, this.shopName);
    this.service.save(shop).then(x => {
      this.router.navigate(['shop']);      
    });
  }

}

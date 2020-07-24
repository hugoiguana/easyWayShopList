import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { LoadingService } from 'src/app/service/common/loading.service';
import { ShopSchedulingService } from 'src/app/service/shopscheduling.service';
import { ShopScheduling } from 'src/app/model/shop-scheduling';

@Component({
  selector: 'app-shop-scheduling-add',
  templateUrl: './shop-scheduling-add.page.html',
  styleUrls: ['./shop-scheduling-add.page.scss'],
})
export class ShopSchedulingAddPage implements OnInit {

  shopIdOff: string;
  idOff: string;
  dtScheduling: Date;
  isDone: boolean;
  comments: string;

  constructor(private router: Router
    , private route: ActivatedRoute
    , private service : ShopSchedulingService
    , private loading: LoadingService) { 
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.shopIdOff = params.get('shopIdOff'); 
      this.idOff = params.get('idOff');      

      this.service.findByIdOff(this.idOff).then(x => {
        if (x) {
          const entity = x as ShopScheduling;
          this.dtScheduling = entity.dtScheduling;
          this.isDone = entity.isDone;
          this.comments = entity.comments;
        }
      });
    });

  }

  async onSubmit() {
    await this.loading.show();
    const dtScheduling = this.dtScheduling ? this.dtScheduling : new Date();
    let shop = ShopScheduling.of(this.idOff, this.shopIdOff, dtScheduling, this.isDone, this.comments); 
    this.service.save(shop).then(x => {
      this.loading.hide();
      this.router.navigate(['shop-scheduling', this.shopIdOff]);      
    });
  }

}

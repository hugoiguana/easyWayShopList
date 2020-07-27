import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-modal-searchbar',
  templateUrl: './product-modal-searchbar.component.html',
  styleUrls: ['./product-modal-searchbar.component.scss'],
})
export class ProductModalSearchbarComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}

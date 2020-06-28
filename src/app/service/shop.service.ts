import { Injectable } from '@angular/core';

import { Shop } from '../model/shop';
import { StorageService } from './storage.service';

const KEY_STORAGE = "shop-storage";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private storageService: StorageService) { 

  }

  findAll() : Promise<Shop[]> {
    return this.storageService.getItems(KEY_STORAGE);     
  }

  save(shop: Shop) : Promise<void> {
    if (shop.id) {
      return this.update(shop);
    } else {      
      return this.create(shop);
    }
  }

  private create(shop: Shop) : Promise<void> {    
    return this.storageService.addItem(KEY_STORAGE, shop);
  }
  
  private update(shop: Shop) : Promise<void> {
    return null;
  }
}

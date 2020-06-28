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
  
}

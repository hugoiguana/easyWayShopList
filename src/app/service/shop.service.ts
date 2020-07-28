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

  findByIdOff(idOff: string) : Promise<Shop> {
    return this.storageService.getItemByIdOff(KEY_STORAGE, idOff);
  }

  findAll() : Promise<Shop[]> {
    return this.storageService.getItems(KEY_STORAGE);     
  }

  save(entity: Shop) : Promise<Shop> {
    if (entity.idOff) {
      return this.update(entity);
    } else {      
      return this.create(entity);
    }
  }

  private create(entity: Shop) : Promise<Shop> {       
    entity.dtCriation = new Date();
    entity.dtModification = new Date();     
    return this.storageService.addItem(KEY_STORAGE, entity);
  }
  
  private update(entity: Shop) : Promise<Shop> {
    entity.dtModification = new Date();    
    return this.storageService.updateItem(KEY_STORAGE, entity);
  }

  delete(idOff: string) : Promise<void> {
    return this.storageService.deleteItem(KEY_STORAGE, idOff);
  }

}

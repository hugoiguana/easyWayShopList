import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { ShopScheduling } from '../model/shop-scheduling';

const KEY_STORAGE = "shopscheduling-storage";

@Injectable({
  providedIn: 'root'
})
export class ShopSchedulingService {

  constructor(private storageService: StorageService) {     
  }

  findByIdOff(idOff: string) : Promise<ShopScheduling> {
    return this.storageService.getItemByIdOff(KEY_STORAGE, idOff);
  }

  async findAll(shopIdOff: string) : Promise<ShopScheduling[]> {
    const items = await this.storageService.getItems(KEY_STORAGE) as ShopScheduling[];
    return items.filter(x => x.shopIdOff === shopIdOff);      
  }

  save(entity: ShopScheduling) : Promise<ShopScheduling> {    
    if (entity.idOff) {
      return this.update(entity);
    } else {      
      return this.create(entity);
    }
  }

  private create(entity: ShopScheduling) : Promise<ShopScheduling> {     
    entity.dtCriation = new Date();
    entity.dtModification = new Date();       
    return this.storageService.addItem(KEY_STORAGE, entity);
  }
  
  private update(entity: ShopScheduling) : Promise<ShopScheduling> {
    entity.dtModification = new Date();    
    return this.storageService.updateItem(KEY_STORAGE, entity);
  }

  delete(idOff: string) : Promise<void> {
    return this.storageService.deleteItem(KEY_STORAGE, idOff);
  }
}

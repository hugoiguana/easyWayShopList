import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { ShopItems } from '../model/shop-items';

const KEY_STORAGE = "shop-items-storage";

@Injectable({
  providedIn: 'root'
})
export class ShopItemsService {

  constructor(private storageService: StorageService) {     
  }

  findByIdOff(idOff: string) : Promise<ShopItems> {
    return this.storageService.getItemByIdOff(KEY_STORAGE, idOff);
  }

  async findAll(idOffShopScheduling: string) : Promise<ShopItems[]> {
    const items = await this.storageService.getItems(KEY_STORAGE) as ShopItems[];
    return items.filter(x => x.idOffShopScheduling === idOffShopScheduling);      
  }

  save(entity: ShopItems) : Promise<void> {    
    if (entity.idOff) {
      return this.update(entity);
    } else {      
      return this.create(entity);
    }
  }

  private create(entity: ShopItems) : Promise<void> {        
    entity.dtCriation = new Date();
    entity.dtModification = new Date();      
    return this.storageService.addItem(KEY_STORAGE, entity);
  }
  
  private update(entity: ShopItems) : Promise<void> {
    entity.dtModification = new Date();  
    return this.storageService.updateItem(KEY_STORAGE, entity);
  }

  delete(idOff: string) : Promise<void> {
    return this.storageService.deleteItem(KEY_STORAGE, idOff);
  }
  
}

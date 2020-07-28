import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { Product } from '../model/product';

const KEY_STORAGE = "product-storage";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private storageService: StorageService) {     
  }

  findByIdOff(idOff: string) : Promise<Product> {
    return this.storageService.getItemByIdOff(KEY_STORAGE, idOff);
  }

  async findAll() : Promise<Product[]> {
    const items = await this.storageService.getItems(KEY_STORAGE) as Product[];
    return items;      
  }

  save(entity: Product) : Promise<Product> {    
    if (entity.idOff) {
      return this.update(entity);
    } else {      
      return this.create(entity);
    }
  }

  private create(entity: Product) : Promise<Product> {        
    entity.dtCriation = new Date();
    entity.dtModification = new Date();      
    return this.storageService.addItem<Product>(KEY_STORAGE, entity);
  }
  
  private update(entity: Product) : Promise<Product> {
    entity.dtModification = new Date();  
    return this.storageService.updateItem(KEY_STORAGE, entity);
  }

  delete(idOff: string) : Promise<void> {
    return this.storageService.deleteItem(KEY_STORAGE, idOff);
  }
}

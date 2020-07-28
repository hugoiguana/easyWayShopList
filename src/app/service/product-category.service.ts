import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { StorageService } from './storage.service';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';

const KEY_STORAGE = "product-category-storage";

const DEFAULT_CATEGORIES : ProductCategory[] = [
  ProductCategory.of('Frios'),
  ProductCategory.of('Higiene e Beleza' ),
  ProductCategory.of('Limpeza' ),
  ProductCategory.of('Laticínios e Carnes' ),
  ProductCategory.of('Enlatados e Molhos' ),
  ProductCategory.of('Lanche' ),
  ProductCategory.of('Óleos e C&A' ),
  ProductCategory.of('Especiarias e C&A' ),
  ProductCategory.of('Grão/Farinha/Massas' ),
  ProductCategory.of('Padaria' ),
  ProductCategory.of('Bebidas' ),
  ProductCategory.of('Alimentos' ),
  ProductCategory.of('Utilidades' ),
  ProductCategory.of('Mantimentos' ),
  ProductCategory.of('Outros' ),
  ProductCategory.of('Hortifruti' ),
];

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private storageService: StorageService) {     
  }

  findByIdOff(idOff: string) : Promise<ProductCategory> {
    return this.storageService.getItemByIdOff(KEY_STORAGE, idOff);
  }

  async findAll() : Promise<ProductCategory[]> {
    const items = await this.storageService.getItems(KEY_STORAGE) as ProductCategory[];
    return items;      
  }

  save(entity: ProductCategory) : Promise<ProductCategory> {    
    if (entity.idOff) {
      return this.update(entity);
    } else {      
      return this.create(entity);
    }
  }

  private create(entity: ProductCategory) : Promise<ProductCategory> {        
    entity.dtCriation = new Date();
    entity.dtModification = new Date();          
    return this.storageService.addItem(KEY_STORAGE, entity);
  }
  
  private update(entity: ProductCategory) : Promise<ProductCategory> {
    entity.dtModification = new Date();  
    return this.storageService.updateItem(KEY_STORAGE, entity);
  }

  delete(idOff: string) : Promise<void> {
    return this.storageService.deleteItem(KEY_STORAGE, idOff);
  }

  async saveDefaultCategories() {
    await this.findAll().then(categories => {    
      if (_.isEmpty(categories)) {

        categories = DEFAULT_CATEGORIES.map(category => {
          category.dtCriation = new Date();
          category.dtModification = new Date();          
          return category;
        });

        this.storageService.addItems(KEY_STORAGE, categories);
      }      
    });
  }
}

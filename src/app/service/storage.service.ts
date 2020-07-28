import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { v4 as uuidv4} from 'uuid';
import * as _ from 'lodash';

import { Persistent } from '../model/persistent';


const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  async getItemByIdOff<T>(key: string, idOff: string) : Promise<T> {
    const ret = await Storage.get({ key: key });
    const items = JSON.parse(ret.value);  
    if (items) {
      return items.find(i => i.idOff === idOff);
    }
    return null;
  }

  async getItems<T>(key: string) : Promise<T[]> {
    const ret = await Storage.get({ key: key });
    if(!ret.value) {
      return [];
    }
    return JSON.parse(ret.value);
  }

  async addItem(key: string, item: Persistent) : Promise<void> {   
    if (!item.idOff) {
      item.idOff = uuidv4();      
    }
    Storage.get({ key: key }).then(i => {      
      let items: Persistent[] = JSON.parse(i.value);
      if (!items) {
        items = [];
      }
      items.push(item);  
      return Storage.set({key: key, value: JSON.stringify(items)});
    });
  }

  async addItems(key: string, items: Persistent[]) : Promise<void> {   
    items = items.map(i => {
      if (!i.idOff) {
        i.idOff = uuidv4();      
      }
      return i;
    });

    Storage.get({ key: key }).then(i => {
      let itemsPersisted: Persistent[] = JSON.parse(i.value);
      if (itemsPersisted && !_.isEmpty(itemsPersisted)) {
        items = items.concat(itemsPersisted);
      }
    });  
    return Storage.set({key: key, value: JSON.stringify(items)});
  }

  async updateItem(key: string, item: Persistent) : Promise<void> {  
    await this.deleteItem(key, item.idOff);
    return this.addItem(key, item);  
  }

  async deleteItem(key: string, idOff: string) : Promise<void> {    
    Storage.get({ key: key }).then(i => {
      let items: Persistent[] = JSON.parse(i.value);
      if (items) {        
        const itemsToSave = items.filter(i => i.idOff !== idOff );
        return Storage.set({key: key, value: JSON.stringify(itemsToSave)});        
      }      
    });  
  } 

  async clear() {
    await Storage.clear();
  }

}

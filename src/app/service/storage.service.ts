import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { v4 as uuidv4} from 'uuid';

import { Persistent } from '../model/persistent';


const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async getItems<T>(key: string) : Promise<T[]> {
    const ret = await Storage.get({ key: key });
    return JSON.parse(ret.value);
  }

  async addItem(key: string, item: Persistent) : Promise<void> {   
    if (!item.id) {
      item.id = uuidv4();
    }
    Storage.get({ key: key }).then(i => {
      let items: Persistent[] = JSON.parse(i.value);
      console.log('saving items = ' + items)
      if (!items) {
        items = [];
      }
      items.push(item);
      return Storage.set({key: key, value: JSON.stringify(items)});
    });
  }

 /*  async updateItem(item: Shop) : Promise<any> {       
    await Storage.get({ key: KEY_STORAGE }).then(i => {
      let items: Shop[] = JSON.parse(i.value);
      if (!items || items.length === 0) {
        return null;
      }
      let newItems : Shop[] = [];
      items.forEach(i => {
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }          
      });

      return Storage.set({key: KEY_STORAGE, value: JSON.stringify(newItems)});
    });
  }

  async deleteItem(item: Shop) : Promise<any> {       
    await Storage.get({ key: KEY_STORAGE }).then(i => {
      let items: Shop[] = JSON.parse(i.value);
      if (!items || items.length === 0) {
        return null;
      }
      let itemsToKeep : Shop[] = [];
      items.forEach(i => {
        if (i.id !== item.id) {
          itemsToKeep.push(item);
        }          
      });
      return Storage.set({key: KEY_STORAGE, value: JSON.stringify(itemsToKeep)});
    });
  } */

  async clear() {
    await Storage.clear();
  }

}

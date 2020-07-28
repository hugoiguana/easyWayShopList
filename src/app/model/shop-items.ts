import { Persistent } from './persistent';
import { Product } from './product';

export class ShopItems extends Persistent {

    quantity: number;
    price: number;
    idShopScheduling: string;
    idOffShopScheduling: string;
    product: Product;

    static empty() : ShopItems {
        return new ShopItems();
    }

    static of(idOff?: string) : ShopItems {
        let entity = new ShopItems();
        entity.idOff = idOff;
        entity.price = 0;
        entity.quantity = 0;
        return entity;
    }

    get totalPrice() {
        return this.quantity * this.price;
    }

}
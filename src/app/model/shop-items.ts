import { Persistent } from './persistent';
import { Product } from './product';

export class ShopItems extends Persistent {

    quantity: number;
    price: number;
    idShopScheduling: string;
    idOffShopScheduling: string;
    comments: string;
    product: Product;

    static empty() : ShopItems {
        let shopItems = new ShopItems();
        shopItems.product = Product.empty();
        return shopItems;
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
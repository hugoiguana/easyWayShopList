import { Persistent } from './persistent';

export class ShopItems extends Persistent {

    quantity: number;
    price: number;
    totalPrice: number;
    idShopScheduling: string;
    idOffShopScheduling: string;
    idProduct: string;
    idOffProduct: string;

    static empty() : ShopItems {
        return new ShopItems();
    }

    static of(idOff?: string) : ShopItems {
        let entity = new ShopItems();
        entity.idOff = idOff;
        entity.price = 0;
        entity.totalPrice = 0;
        entity.quantity = 0;
        return entity;
    }

}
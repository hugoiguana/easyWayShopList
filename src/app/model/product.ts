import { Persistent } from './persistent';

export class Product extends Persistent {

    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
    idShopScheduling: string;
    idOffShopScheduling: string;
    idCategory: string;
    idOffCategory: string;

    static empty() : Product {
        return new Product();
    }

    static of(idOff?: string, name?: string) : Product {
        let entity = new Product();
        entity.idOff = idOff;
        entity.name = name;
        entity.price = 0;
        entity.totalPrice = 0;
        entity.quantity = 0;
        return entity;
    }

}
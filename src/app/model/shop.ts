import { Persistent } from './persistent';

export class Shop extends Persistent {
    
    name: string;
    dtCriation: Date;
    dtModification: Date

    static empty() : Shop {
        return new Shop();
    }

    static of(name: string) : Shop {
        let shop = new Shop();
        shop.name = name;
        shop.dtCriation = new Date();
        shop.dtModification = new Date();
        return shop;
    }

}
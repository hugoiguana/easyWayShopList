import { Persistent } from './persistent';

export class Shop extends Persistent {
    
    name: string;

    static empty() : Shop {
        return new Shop();
    }

    static of(idOff?: string, name?: string) : Shop {
        let entity = new Shop();
        entity.idOff = idOff;
        entity.name = name;
        return entity;
    }

}
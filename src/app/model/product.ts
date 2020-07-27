import { Persistent } from './persistent';

export class Product extends Persistent {

    name: string;
    idCategory: string;
    idOffCategory: string;

    static empty() : Product {
        return new Product();
    }

    static of(idOff?: string, name?: string) : Product {
        let entity = new Product();
        entity.idOff = idOff;
        entity.name = name;
        return entity;
    }

}
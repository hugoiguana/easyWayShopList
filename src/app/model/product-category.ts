import { Persistent } from './persistent';

export class ProductCategory extends Persistent {
    
    name: string;

    static empty() : ProductCategory {
        return new ProductCategory();
    }

    static of(name?: string, idOff?: string) : ProductCategory {
        let entity = new ProductCategory();
        entity.idOff = idOff;
        entity.name = name;
        return entity;
    }
}

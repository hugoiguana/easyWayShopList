import { Persistent } from './persistent';
import { ProductCategory } from './product-category';

export class Product extends Persistent {

    name: string;
    category: ProductCategory    

    static empty() : Product {
        let p = new Product();
        p.category = ProductCategory.empty();
        return p;
    }

    static of(idOff?: string, name?: string) : Product {
        let entity = new Product();
        entity.idOff = idOff;
        entity.name = name;
        return entity;
    }

}
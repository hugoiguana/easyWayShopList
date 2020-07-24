import { Persistent } from './persistent';

export class ShopScheduling extends Persistent {
    
    dtScheduling: Date;
    isDone: boolean;
    comments: string;
    valueItems: number;
    shopIdOff: string;

    static empty() : ShopScheduling {
        return new ShopScheduling();
    }

    static of(idOff?: string, shopIdOff?: string, dtScheduling?: Date, isDone?: boolean, comments?: string) : ShopScheduling {
        let entity = new ShopScheduling();
        entity.idOff = idOff;
        entity.shopIdOff = shopIdOff;
        entity.dtScheduling = dtScheduling;
        entity.isDone = isDone;
        entity.comments = comments;
        return entity;
    }
}
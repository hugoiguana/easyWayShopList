import { Persistent } from './persistent';

export class ShopScheduling extends Persistent {
    
    dtScheduling: Date;
    description: string;
    isDone: boolean;

    static empty() : ShopScheduling {
        return new ShopScheduling();
    }

    static of(idOff?: string, description?: string) : ShopScheduling {
        let shopSchedule = new ShopScheduling();
        shopSchedule.idOff = idOff;
        shopSchedule.description = description;
        shopSchedule.isDone = false;
        return shopSchedule;
    }
}
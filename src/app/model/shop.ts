export class Shop {
    
    id: string;
    name: string;
    dtCriation: Date;
    dtModification: Date

    static of() : Shop {
        return new Shop();
    }

}
import {v4 as uuid} from 'uuid';

export class ShopItemInfo {

    name: string;
    price: number;
    image: string;

    id: string; 

    constructor(
        name: string,
        price: number,
        image: string
    ) {
        this.name = name;
        this.price = price;
        this.image = image;

        this.id = uuid();
    }
}
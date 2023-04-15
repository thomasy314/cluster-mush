
export class ShopItemPageInfo { 

    name: string;
    description: string;
    items: ShopItemInfo[];

    constructor(
            name: string,
            description: string,
            items: ShopItemInfo[]
        ) {
            this.name = name;
            this.description = description;
            this.items = items;
    }

    /*getItemPriceText = () => {
        // TODO: Look into why dollar is not aligning with number
        return  `$${this.itemPrice.toFixed(2)}`
    }*/

    getPath = (): string => {
        return this.name.toLocaleLowerCase().replace(' ', '-')    
    }
}
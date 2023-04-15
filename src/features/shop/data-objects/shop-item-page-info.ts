
export class ShopItemPageInfo { 

    itemName: string;
    itemDescription: string;
    itemBulletNotes: string[];
    itemImages: string[];
    itemPrice: number;

    constructor(
        itemName: string,
        itemDescription: string,
        itemBulletNotes: string[],
        itemImages: string[],
        itemPrice: number
        ) {
            this.itemName = itemName;
            this.itemDescription = itemDescription;
            this.itemBulletNotes = itemBulletNotes;
            this.itemImages = itemImages;
            this.itemPrice = itemPrice;
    }

    getItemPriceText = () => {
        // TODO: Look into why dollar is not aligning with number
        return  `$${this.itemPrice.toFixed(2)}`
    }

    getPath = (): string => {
        return this.itemName.toLocaleLowerCase().replace(' ', '-')    
    }
}

class StorePageInfo {

    itemName: String;
    itemDescription: String;
    itemBulletNotes: String[];
    itemImages: File[];
    itemPrice: Number;

    constructor(
        itemName: String,
        itemDescription: String,
        itemBulletNotes: String[],
        itemImages: File[],
        itemPrice: Number
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
}

export default StorePageInfo;
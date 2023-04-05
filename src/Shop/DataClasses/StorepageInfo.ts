
class StorePageInfo {

    itemName: String;
    itemDescription: String;
    itemImages: File[];
    itemPrice: Number;

    constructor(
        itemName: String,
        itemDescription: String,
        itemImages: File[],
        itemprice: Number
        ) {
            this.itemName = itemName;
            this.itemDescription = itemDescription;
            this.itemImages = itemImages;
            this.itemPrice = this.itemPrice;
    }
}

export default StorePageInfo;
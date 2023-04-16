import { ShopItemInfo } from "./shop-item-info";
import { doc, getDoc } from 'firebase/firestore';
import { shopItemInfoCollectionRef } from "../../firebase/firebase";

export class ShopItemPageInfo {

    name: string;
    price: number;
    itemId: string;
    loading: boolean;

    constructor(
        itemId: string
    ) {
        this.name = '';
        this.price = 0;
        this.itemId = itemId;
        this.loading = true;

        this.getItem(itemId)
            .then(shopItemInfo => {
                this.name = shopItemInfo.name;
                this.price = shopItemInfo.price;
                this.loading = false;
            })
            .catch(() => window.alert('Unable to load shop item'))
    }

    getItem = (itemId: string): Promise<ShopItemInfo> => {
        const docRef = doc(shopItemInfoCollectionRef, itemId);
        return new Promise((resolve, reject) => {
            getDoc(docRef)
                .then(docSnap => {
                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                        const shopItemInfo: ShopItemInfo = {
                            name: docSnap.get('name'),
                            price: docSnap.get('price'),
                            // TODO: change image
                            image: ''
                        }
                        resolve(shopItemInfo);
                    } else {
                        reject('No shop item info found');
                    }
                });
        })
    }
}
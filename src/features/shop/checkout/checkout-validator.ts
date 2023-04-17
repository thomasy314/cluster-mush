import { BasketItem, getCachedBasketItems } from "../basket"
import { compareShopItemInfo } from "../data-objects";
import { getShopItemById } from "../item-data";

export const validateBasket = (): Promise<Boolean> => {
    const basketItems: BasketItem[] = getCachedBasketItems() ?? [];

    if (basketItems.length === 0) {
        return new Promise((resolve, reject) => resolve(false));
    }

    const checkingBasketPromiseList = basketItems.map((bItem): Promise<boolean> => {
        /*
            1. using id, get item from firestore
            2. check if all values are correct
        */

        return new Promise((resolve, reject) => {
            getShopItemById(bItem.item.id)
                .then(firebaseItem => {
                    resolve(compareShopItemInfo(firebaseItem, bItem.item));
                })
        });

    });

    console.log('test')

    return new Promise((resolve, reject) => {
        Promise.all(checkingBasketPromiseList)
            .then((values: boolean[]) => resolve(values.every(v => v === true)));
    });

}
import { BasketItem, getCachedBasketItems } from "../basket"
import { compareShopItemInfo } from "../data-objects";
import { getShopItemById } from "../item-data";

export const validateBasket = (): boolean => {
    const basketItems: BasketItem[] = getCachedBasketItems() ?? [];

    if (basketItems.length === 0) {
        return false;
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
    Promise.all(checkingBasketPromiseList)
        .then((values: boolean[]) => console.log('SUCCESS!: ', values.every(v => v === true)))

    return true;
}
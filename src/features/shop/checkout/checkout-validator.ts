import { FailedToGetShopItemWithId } from "../../../errors";
import { BasketItem, getCachedBasketItems } from "../basket"
import { compareShopItemInfo } from "../data-objects";
import { getShopItemById } from "../item-data";

export const validateBasket = (): Promise<Boolean> => {
    const basketItems: BasketItem[] = getCachedBasketItems() ?? [];

    if (basketItems.length === 0) {
        return new Promise((resolve) => resolve(false));
    }

    const checkingBasketPromiseList = basketItems.map((bItem): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            getShopItemById(bItem.item.id)
                .then(firebaseItem => {
                    resolve(compareShopItemInfo(firebaseItem, bItem.item));
                })
                .catch(err => {
                    reject(new FailedToGetShopItemWithId(err));
                })
        });

    });

    return new Promise((resolve, reject) => {
        Promise.all(checkingBasketPromiseList)
            .then((values: boolean[]) => resolve(values.every(v => v === true)));
    });

}
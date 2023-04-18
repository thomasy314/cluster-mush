import { doc, getDoc, getDocs, limit, query, where } from "firebase/firestore";
import { FailedToRequestShopItem, DatabaseDoesNotContainShopIdWithId, FailedToGetShopItemWithId } from "../../../errors";
import { shopItemInfoCollectionRef } from "../../firebase/firebase";
import { ShopItemInfo } from "../data-objects";

const cacheShopItemInfo = (shopItemInfo: ShopItemInfo) => {
    sessionStorage.setItem(shopItemInfo.id, JSON.stringify(shopItemInfo));
}

const getCachedShopItemInfo = (id: string): ShopItemInfo | null => {
    const cachedShopItem = sessionStorage.getItem(id);
    return cachedShopItem ? JSON.parse(cachedShopItem) : null;
}

export const getAvaiableItems = (): Promise<ShopItemInfo[]> => {
    const itemQuery = query(shopItemInfoCollectionRef, where("available", "==", true), limit(10));

    return new Promise((resolve, reject) => {
        getDocs(itemQuery)
            .then(itemDocs => {
                const shopItemInfo: ShopItemInfo[] = itemDocs.docs.map(docSnap => {
                    const shopItemInfo = {
                        id: docSnap.id,
                        name: docSnap.get('name'),
                        price: docSnap.get('price'),
                        image: docSnap.get('image'),
                        available: docSnap.get('available'),
                        stripeId: docSnap.get('stripe-id')
                    };
                    cacheShopItemInfo(shopItemInfo);
                    return shopItemInfo;
                });
                resolve(shopItemInfo)
            })
            .catch(() => reject(new FailedToRequestShopItem()));
    });
};

export const getShopItemById = (id: string): Promise<ShopItemInfo> => {
    const cachedShopItem = getCachedShopItemInfo(id);

    const requestShopItemPromise: Promise<ShopItemInfo> = new Promise((resolve, reject) => {
        requestShopItemByIdFromFirebase(id)
            .then(shopItemInfo => {
                cacheShopItemInfo(shopItemInfo);
                resolve(shopItemInfo);
            })
            .catch(err => {
                reject(new FailedToGetShopItemWithId(err));
            })
    });

    if (cachedShopItem === null) {
        return requestShopItemPromise;
    } else {
        return new Promise(resolve => resolve(cachedShopItem));
    }
};

const requestShopItemByIdFromFirebase = (id: string): Promise<ShopItemInfo> => {
    const docRef = doc(shopItemInfoCollectionRef, id);
    return new Promise((resolve, reject) => {
        getDoc(docRef)
            .then(docSnap => {
                if (docSnap.exists()) {
                    const shopItem = {
                        id: docSnap.id,
                        name: docSnap.get('name'),
                        price: docSnap.get('price'),
                        image: docSnap.get('image'),
                        available: docSnap.get('available'),
                        stripeId: docSnap.get('stripe-id')
                    };
                    resolve(shopItem);
                } else {
                    reject(new DatabaseDoesNotContainShopIdWithId(id));
                }
            })
            .catch(() => reject(new FailedToRequestShopItem()));
    })
};

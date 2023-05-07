import { collection, doc, DocumentData, getDoc, getDocs, query, where } from "firebase/firestore";
import { DatabaseDoesNotContainShopIdWithId, FailedToGetShopItemWithId, FailedToRequestShopItem } from "../../../errors";
import { stripeProductsCollectionRef } from "../../firebase/firebase";
import { ShopItemInfo } from "../data-objects";

const cacheShopItemInfo = (shopItemInfo: ShopItemInfo) => {
    sessionStorage.setItem(shopItemInfo.id, JSON.stringify(shopItemInfo));
}

const getCachedShopItemInfo = (id: string): ShopItemInfo | null => {
    const cachedShopItem = sessionStorage.getItem(id);
    return cachedShopItem ? JSON.parse(cachedShopItem) : null;
}

export const getActiveStripeProducts = (): Promise<ShopItemInfo[]> => {
    // TODO: Add limit/pagination
    const itemQuery = query(stripeProductsCollectionRef, where("active", "==", true));

    return new Promise((resolve, reject) => {
        getDocs(itemQuery)
            .then(querySnapshot => {
                const shopItemRequests: Promise<ShopItemInfo>[] = querySnapshot.docs.map(getShopItemFromStripeProductDoc);

                Promise.all(shopItemRequests)
                    .then(shopItemList => {
                        shopItemList.forEach(cacheShopItemInfo);

                        resolve(shopItemList);
                        return;
                    })
                    // TODO: make this better
                    .catch(() => reject(new FailedToRequestShopItem()))
            });
    })

}


export const getShopItemById = (id: string, useCachedItems?: boolean): Promise<ShopItemInfo> => {
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

    if (!useCachedItems || cachedShopItem === null) {
        return requestShopItemPromise;
    } else {
        return new Promise(resolve => resolve(cachedShopItem));
    }
};

const requestShopItemByIdFromFirebase = (id: string): Promise<ShopItemInfo> => {
    const docRef = doc(stripeProductsCollectionRef, id);

    return new Promise((resolve, reject) => {
        getDoc(docRef)
            .then(doc => {
                if (doc.exists()) {
                    getShopItemFromStripeProductDoc(doc)
                        .then(resolve);
                } else {
                    reject(new DatabaseDoesNotContainShopIdWithId(id));
                }
            })
            .catch(() => reject(new FailedToRequestShopItem()));
    })
};

const getShopItemFromStripeProductDoc = (doc: DocumentData): Promise<ShopItemInfo> => {
    const pricesRef = collection(doc.ref, 'prices');

    return new Promise((resolve, reject) => {
        getDocs(pricesRef)
            .then(priceDocList => {
                // Assumes there is only one item being specified
                if (priceDocList.size > 1) throw new Error('Too many prices specified');
                const priceDoc = priceDocList.docs[0];

                const shopItem: ShopItemInfo = {
                    id: doc.id,
                    price_id: priceDoc.id,
                    name: doc.get('name'),
                    description: doc.get('description'),
                    // Divide by 100 since the overall price is given in the thousands (ie $12.34 => 1234)
                    price: priceDoc.get('unit_amount') / 100,

                    // TODO: Allow for getting all images
                    image: doc.get('images')[0],
                    available: doc.get('active'),
                };
                resolve(shopItem);
            })
            .catch(() => reject(new FailedToRequestShopItem()));
    });

}
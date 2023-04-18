// https://github.com/coopercodes/ReactEcommerceStoreWithStripeAPI/blob/main/store/src/CartContext.js

import { createContext, useState, PropsWithChildren } from "react";
import { compareShopItemInfo, ShopItemInfo } from "../data-objects";
import { cacheBasketItems, getCachedBasketItems } from "./basket-cacher";

export interface BasketItem {
    item: ShopItemInfo,
    quantity: number
}

type BasketContextType = {
    items: BasketItem[],
    getProductQuantity: (item: ShopItemInfo) => number,
    addOneToBasket: (item: ShopItemInfo) => void,
    removeOneFromBasket: (item: ShopItemInfo) => void,
    deleteFromBasket: (item: ShopItemInfo) => void,
    getTotalCost: () => number
};

export const BasketContext = createContext<BasketContextType>({
    items: [],
    getProductQuantity: (item: ShopItemInfo) => 0,
    addOneToBasket: (item: ShopItemInfo) => {},
    removeOneFromBasket: (item: ShopItemInfo) => {},
    deleteFromBasket: (item: ShopItemInfo) => {},
    getTotalCost: () => 0
});

type BasketProviderProps = {

}

export const BasketProvider = (props: PropsWithChildren<BasketProviderProps>) => {
    const [basketProducts, setBasketProducts] = useState<BasketItem[]>(getBasketFromStorage());

    function getBasketFromStorage(): BasketItem[] {
        const basketItem = getCachedBasketItems();

        return basketItem ?? [];
    }

    function saveBasketToStorage(basketItems: BasketItem[]) {
        cacheBasketItems(basketItems);
        setBasketProducts(basketItems);
    }

    function getProductQuantity(item: ShopItemInfo): number {

        const basket: BasketItem[] = getBasketFromStorage();

        const quantity = basket.find(product => compareShopItemInfo(product.item, item))?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToBasket(item: ShopItemInfo) {
        const quantity = getProductQuantity(item);

        if (quantity === 0) { // product is not in cart
            saveBasketToStorage([
                ...getBasketFromStorage(),
                {
                    item,
                    quantity: 1
                }
            ]);
        } else { // product is in cart
            saveBasketToStorage(
                getBasketFromStorage().map(
                    product => {

                    return compareShopItemInfo(product.item, item)
                    ? { ...product, quantity: product.quantity + 1 } 
                    : product                                        
                })
            );
        }
    }

    function removeOneFromBasket(item: ShopItemInfo) {
        const quantity = getProductQuantity(item);

        if(quantity === 1) {
            deleteFromBasket(item);
        } else {
            saveBasketToStorage(
                getBasketFromStorage().map(
                    product =>
                    compareShopItemInfo(product.item, item)
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
            )
        }
    }

    function deleteFromBasket(item: ShopItemInfo) {
        if (window.confirm(`Are you sure you want to remove ${item.name} from your cart?`)) {
            saveBasketToStorage(
                getBasketFromStorage().filter(product => {
                    return !compareShopItemInfo(product.item, item);
                })
            );
        }
    }

    function getTotalCost() {
        let totalCost = 0;
        basketProducts.forEach((cartItem: BasketItem) => {
            totalCost += (cartItem.item.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue: BasketContextType = {
        items: basketProducts,
        getProductQuantity,
        addOneToBasket: addOneToBasket,
        removeOneFromBasket: removeOneFromBasket,
        deleteFromBasket: deleteFromBasket,
        getTotalCost
    }

    return (
        <BasketContext.Provider value={contextValue}>
            {props.children}
        </BasketContext.Provider>
    )
}
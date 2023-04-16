import { BasketItem } from "./basket.context";

const basketKey = 'basket-cache';

export const cacheBasketItems = (basketItems: BasketItem[]) => {
    localStorage.setItem(basketKey, JSON.stringify(basketItems));
}

export const getCachedBasketItems = (): BasketItem[] | null => {
    const basketItems = localStorage.getItem(basketKey);
    return basketItems ? JSON.parse(basketItems) : null;
}
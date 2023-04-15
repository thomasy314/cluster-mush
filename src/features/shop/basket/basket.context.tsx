// https://github.com/coopercodes/ReactEcommerceStoreWithStripeAPI/blob/main/store/src/CartContext.js

import { createContext, useState, PropsWithChildren } from "react";
import { ShopItemInfo } from "../data-objects";

type BasketItem = {
    item: ShopItemInfo,
    quantity: number
}

type BasketContextType = {
    items: BasketItem[],
    getProductQuantity: (id: string) => number,
    addOneToCart: (item: ShopItemInfo) => void,
    removeOneFromCart: (id: string) => void,
    deleteFromCart: (id: string) => void,
    getTotalCost: () => number
};

export const BasketContext = createContext<BasketContextType>({
    items: [],
    getProductQuantity: (id: string) => 0,
    addOneToCart: (item: ShopItemInfo) => {},
    removeOneFromCart: (id: string) => {},
    deleteFromCart: (id: string) => {},
    getTotalCost: () => 0
});

type BasketProviderProps = {

}

export const BasketProvider = (props: PropsWithChildren<BasketProviderProps>) => {
    const [basketProducts, getBasketProducts] = useState<BasketItem[]>([]);

    function getProductQuantity(id: string): number {
        const quantity = basketProducts.find(product => product.item.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(item: ShopItemInfo) {
        const quantity = getProductQuantity(item.id);

        console.log("Adding to cart: ", item)

        if (quantity === 0) { // product is not in cart
            getBasketProducts(
                [
                    ...basketProducts,
                    {
                        item,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            getBasketProducts(
                basketProducts.map(
                    product =>
                    product.item.id === item.id
                    ? { ...product, quantity: product.quantity + 1 } 
                    : product                                        
                )
            )
        }
    }

    function removeOneFromCart(id: string) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            getBasketProducts(
                basketProducts.map(
                    product =>
                    product.item.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
            )
        }
    }

    function deleteFromCart(id: string) {
        getBasketProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.item.id != id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        basketProducts.map((cartItem) => {
            totalCost += (cartItem.item.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: basketProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <BasketContext.Provider value={contextValue}>
            {props.children}
        </BasketContext.Provider>
    )
}
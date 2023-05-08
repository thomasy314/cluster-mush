import { useContext } from "react";
import { BasketContext, BasketItem } from "./basket.context";

import { BasketItemView } from "./basket-item-view";

export const BasketView = () => {

    const basket = useContext(BasketContext);

    const basketItems: JSX.Element[] = basket.items.map((item: BasketItem) => {
        return <BasketItemView key={item.item.id} item={item} />
    });

    return (
        <>
            {basket.items.length ? basketItems : <p>Basket is empty</p>}
        </>
    )
}
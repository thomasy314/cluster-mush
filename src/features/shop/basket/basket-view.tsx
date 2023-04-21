import { Button, Theme, useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import { BasketContext, BasketItem } from "./basket.context";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './basket-view.css';

export const BasketView = () => {

    const basket = useContext(BasketContext);

    const basketItems: JSX.Element[] = basket.items.map((item: BasketItem) => {
        return <div key={item.item.id}>
                <Button onClick={() => basket.deleteFromBasket(item.item)}>
                    <DeleteOutlineIcon />
                </Button>
                <div className="basketViewItemInfo">
                    <p>Item: {item.item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
                <Button onClick={() => basket.removeOneFromBasket(item.item)}>-</Button>
                <Button onClick={() => basket.addOneToBasket(item.item)}>+</Button>
            </div>
            
    });

    return (
        <>
            {basket.items.length ? basketItems : <p>Basket is empty</p>}
        </>
    )
}
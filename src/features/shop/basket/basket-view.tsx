import { Button } from "@mui/material";
import { useContext } from "react"
import { BasketContext, BasketItem } from "./basket.context"

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const BasketView = () => {

    const basket = useContext(BasketContext);

    return (
        <>
            {basket.items.map((item: BasketItem) => (
                <div key={item.item.id}>
                    <Button onClick={() => basket.deleteFromBasket(item.item)}>
                        <DeleteOutlineIcon/>
                    </Button> 
                    <div style={{display: 'inline-block', padding: '10px'}}>
                        <p>Item: {item.item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                    <Button onClick={() => basket.removeOneFromBasket(item.item)}>-</Button>
                    <Button onClick={() => basket.addOneToBasket(item.item)}>+</Button>
                </div>
            ))}
        </>
    )
}
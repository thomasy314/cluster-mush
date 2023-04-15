import { useContext } from "react"
import { BasketContext } from "./basket.context"

export const BasketView = () => {

    const basket = useContext(BasketContext);

    console.log(basket.items);

    return (
        <>
            {basket.items.map(item => (
                <>
                    <p>Item: {item.item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                </>
            ))}
        </>
    )
}
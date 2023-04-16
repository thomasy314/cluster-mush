import { Button, Container } from "@mui/material";
import { BasketView } from "../../features/shop/basket/basket-view";
import { validateBasket } from "../../features/shop/checkout";

export const Basket = () => {
    return (
        <Container>
            <h1>Basket</h1>
            <hr />
            <BasketView />
            <Button onClick={validateBasket} variant="outlined">Checkout Out</Button>
        </Container>
    )
};
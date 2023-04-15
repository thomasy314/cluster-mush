import { Button, Container } from "@mui/material";
import { BasketView } from "../../features/shop/basket/basket-view";

export const Basket = () => {
    return (
        <Container>
            <h1>Basket</h1>
            <hr />
            <BasketView />
            <Button variant="outlined">Checkout Out</Button>
        </Container>
    )
};
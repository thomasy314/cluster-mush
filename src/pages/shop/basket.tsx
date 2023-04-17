import { Button, Container } from "@mui/material";
import { BasketView } from "../../features/shop/basket/basket-view";
import { validateBasket } from "../../features/shop/checkout";
import { handleCheckout } from "../../features/shop/checkout/stripe";

export const Basket = () => {


    const validateAndCheckout = () => {
        validateBasket()
            .then(isValid => {
                console.log('WORKING')
                handleCheckout();
            })
    }

    return (
        <Container>
            <h1>Basket</h1>
            <hr />
            <BasketView />
            <Button onClick={validateAndCheckout} variant="outlined">Checkout Out</Button>
        </Container>
    )
};
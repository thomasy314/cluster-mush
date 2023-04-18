import { Button, Container } from "@mui/material";
import { useState } from "react";
import { BasketView } from "../../features/shop/basket/basket-view";
import { validateBasket } from "../../features/shop/checkout";
import { handleCheckout } from "../../features/shop/checkout/stripe";

export const Basket = () => {

    const [loadingCheckout, setLoadingCheckout] = useState<boolean>(false);

    const validateAndCheckout = () => {
        setLoadingCheckout(true);
        validateBasket()
            .then(isValid => {
                if (isValid) {
                    handleCheckout()
                        .catch(() => setLoadingCheckout(false));
                } else {
                    // TODO: Display Error and fix cart?
                    setLoadingCheckout(false);
                }
            })
    }

    return (
        <Container>
            <h1>Basket</h1>
            <hr />
            <BasketView />
            {loadingCheckout && <p>LOADING CHECKOUT...</p>}
            <Button onClick={validateAndCheckout} disabled={loadingCheckout} variant="outlined">Checkout</Button>
        </Container>
    )
};
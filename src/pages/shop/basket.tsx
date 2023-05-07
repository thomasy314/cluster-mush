import { Alert, Container } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../features/authentication/user-context";
import { BasketContext } from "../../features/shop";
import { BasketView } from "../../features/shop/basket/basket-view";
import { validateBasket } from "../../features/shop/checkout";
import { handleCheckout_v2 } from "../../features/shop/checkout/stripe";
import { LoadingButton } from "../../features/ui";

import './basket.css';

export const Basket = () => {

    const [loadingCheckout, setLoadingCheckout] = useState<boolean>(false);
    const basket = useContext(BasketContext);

    const [errorMessage, setErrorMessage] = useState<Error | null>(null);

    const user = useContext(UserContext);

    const validateAndCheckout = () => {
        setLoadingCheckout(true);
        validateBasket()
            .then(isValid => {
                if (isValid) {
                    if (user === null) return;
                    handleCheckout_v2(basket.items, user)
                        .catch(error => {
                            setLoadingCheckout(false);
                            setErrorMessage(error);
                        });
                } else {
                    // TODO: Display Error and fix cart?
                    setLoadingCheckout(false);
                }
            })
    }

    return (
        <Container>
            {errorMessage && <Alert severity="error">{errorMessage.message}</Alert>}
            <h1 id='basketTitle'>Basket</h1>
            <BasketView />
            <LoadingButton disabled={basket.items.length === 0 || user === null} onClick={validateAndCheckout} isLoading={loadingCheckout}>Checkout</LoadingButton>
        </Container>
    )
};
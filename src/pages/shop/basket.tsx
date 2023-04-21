import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { BasketContext } from "../../features/shop";
import { BasketView } from "../../features/shop/basket/basket-view";
import { validateBasket } from "../../features/shop/checkout";
import { handleCheckout } from "../../features/shop/checkout/stripe";
import { LoadingButton } from "../../features/ui";

import './basket.css';

export const Basket = () => {

    const [loadingCheckout, setLoadingCheckout] = useState<boolean>(false);
    const basket = useContext(BasketContext);

    const validateAndCheckout = () => {
        setLoadingCheckout(true);
        validateBasket()
            .then(isValid => {
                if (isValid) {
                    handleCheckout(basket.items)
                        .catch(() => setLoadingCheckout(false));
                } else {
                    // TODO: Display Error and fix cart?
                    setLoadingCheckout(false);
                }
            })
    }

    return (
        <Container>
            <h1 id='basketTitle'>Basket</h1>
            <BasketView />
            <LoadingButton disabled={basket.items.length === 0} onClick={validateAndCheckout} isLoading={loadingCheckout}>Checkout</LoadingButton>
        </Container>
    )
};
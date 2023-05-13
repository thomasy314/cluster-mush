import { Alert, Button, Container } from "@mui/material";
import { useContext, useState } from "react";
import { loginAsGuest, loginWithGoogle } from "../../features/authentication";
import { BasketContext } from "../../features/shop";
import { BasketView } from "../../features/shop/basket/basket-view";
import { validateBasket } from "../../features/shop/checkout";
import { handleCheckout_v2 } from "../../features/shop/checkout/stripe";
import { LoadingModal } from "../../features/ui";

import { User } from "firebase/auth";
import { UserContext } from "../../features/authentication/user-context";

import GoogleIcon from '@mui/icons-material/Google';

import './basket.css';

export const Basket = () => {

    const [loadingCheckout, setLoadingCheckout] = useState<boolean>(false);
    const basket = useContext(BasketContext);

    const [errorMessage, setErrorMessage] = useState<Error | null>(null);

    const { user, loadingUser } = useContext(UserContext);

    const checkoutWithGoogle = () => {
        if (user && !user.isAnonymous) {
            validateAndCheckout(user);
        } else {
            loginWithGoogle()
                .then((newUser) => validateAndCheckout(newUser));
        }

    }

    const checkoutAsGuest = () => {
        if (user === null || user.isAnonymous) {
            loginAsGuest()
                .then(user =>
                    validateAndCheckout(user)
                );
        } else {
            validateAndCheckout(user);
        }
    }

    const validateAndCheckout = (user: User): Promise<void> => {
        setLoadingCheckout(true);

        return new Promise<void>((resolve, reject) => {
            validateBasket()
                .then(isValid => {
                    if (isValid) {
                        handleCheckout_v2(basket.items, user)
                            .then(() => resolve())
                            .catch(error => {
                                setLoadingCheckout(false);
                                setErrorMessage(error);
                                reject(error);
                                return;
                            });
                    } else {
                        // TODO: Display Error and fix cart?
                        setLoadingCheckout(false);
                        reject();
                    }
                })
        })

    }

    return (
        <Container>
            <LoadingModal open={loadingCheckout || loadingUser} />
            {errorMessage && <Alert severity="error">{errorMessage.message}</Alert>}
            <h1 id='basketTitle'>Basket</h1>
            <BasketView />
            <br />
            <div style={{float: 'right'}}>
                <Button style={{float: 'right'}} disabled={basket.items.length === 0} onClick={checkoutWithGoogle}><GoogleIcon /> &nbsp; Checkout with Google</Button>
                <br />
                <br />
                <br />
                <Button style={{float: 'right'}} disabled={basket.items.length === 0} onClick={checkoutAsGuest}>Checkout as guest</Button>
            </div>
        </Container>
    )
};
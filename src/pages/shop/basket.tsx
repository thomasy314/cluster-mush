import { Alert, Container } from "@mui/material";
import { useContext, useState } from "react";
import { loginAsGuest, loginWithGoogle } from "../../features/authentication";
import { BasketContext } from "../../features/shop";
import { BasketView } from "../../features/shop/basket/basket-view";
import { validateBasket } from "../../features/shop/checkout";
import { handleCheckout_v2 } from "../../features/shop/checkout/stripe";
import { LoadingButton } from "../../features/ui";

import GoogleIcon from '@mui/icons-material/Google';

import { User } from "firebase/auth";
import { UserContext } from "../../features/authentication/user-context";
import './basket.css';

export const Basket = () => {

    const [loadingCheckout, setLoadingCheckout] = useState<boolean>(false);
    const basket = useContext(BasketContext);

    const [errorMessage, setErrorMessage] = useState<Error | null>(null);

    const user = useContext(UserContext);

    const checkoutWithGoogle = () => {
        if (user && !user.isAnonymous) {
            validateAndCheckout(user);
        } else {
            loginWithGoogle()
                .then((newUser) => validateAndCheckout(newUser));
        }

    }

    const checkoutAsGuest = () => {
        if (user === null || !user.isAnonymous) {
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

    const showGuestCheckout = (!loadingCheckout && (user === null || user.isAnonymous))

    return (
        <Container>
            {errorMessage && <Alert severity="error">{errorMessage.message}</Alert>}
            <h1 id='basketTitle'>Basket</h1>
            <BasketView />
            <br />
            <div style={{float: 'right'}}>
            <LoadingButton disabled={basket.items.length === 0} onClick={checkoutWithGoogle} isLoading={loadingCheckout}><><GoogleIcon /><p> &nbsp; Checkout with google</p></></LoadingButton>
            <br />
            {showGuestCheckout && <LoadingButton disabled={basket.items.length === 0} onClick={checkoutAsGuest} isLoading={loadingCheckout}><p>Checkout as guest</p></LoadingButton>}
            </div>
        </Container>
    )
};
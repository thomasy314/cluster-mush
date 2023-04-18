import { loadStripe, Stripe, RedirectToCheckoutOptions } from '@stripe/stripe-js';
import { FailedToRedirectToCheckout, FailedToRequestStripeClient, StripeClientIsNull } from '../../../errors';
import { isLocalHost } from '../../../routing/routing-path-helpers';

let stripePromise: Promise<Stripe>;

const stripePublishKey_TEST = 'pk_test_51MxqrTHgT1AABCbEpl4hep9DfirvaXUuit2kwXR8z7aDRB5NBKPZ9tHo5oSHQrzCxQvYcF7YFBYEQYXBRD7wKfuP00FnIUwOf4';

const completeUrl = isLocalHost() ? 'http://shop.localhost:3000' : 'https://shop.clustermush.com';
const successUrl = completeUrl + '/success';
const cancelUrl = completeUrl + '/cancel';


export const getStripe = () => {

    let NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string = stripePublishKey_TEST;

    if (!stripePromise) {
        stripePromise = new Promise((resolve, reject) => {
            loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
                .then(thing => {
                    if (thing === null) {
                        reject(new StripeClientIsNull());
                        return;
                    }
                    resolve(thing);
                })
                .catch(() => {
                    reject(new FailedToRequestStripeClient());
                });

        });
    }
    return stripePromise;
};

export function handleCheckout(): Promise<void> {
    return new Promise((resolve, reject) => {
        getStripe()
            .then(stripe => {

                // TODO: Replace dummy values
                const checkoutInputs: RedirectToCheckoutOptions = {
                    lineItems: [
                        {
                            price: process.env.REACT_APP_NEXT_PUBLIC_STRIPE_PRICE_ID,
                            quantity: 1,
                        },
                    ],
                    mode: 'payment',
                    successUrl: successUrl,
                    cancelUrl: cancelUrl,
                    customerEmail: 'customer@email.com',
                }

                stripe.redirectToCheckout(checkoutInputs)
                    .catch(error => reject(new FailedToRedirectToCheckout(error)));
            })
    });
}
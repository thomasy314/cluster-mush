import { loadStripe, Stripe } from '@stripe/stripe-js';
import { User } from 'firebase/auth';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { FailedToRedirectToCheckout, FailedToRequestStripeClient, StripeClientIsNull } from '../../../errors';
import { isLocalHost } from '../../../routing/routing-path-helpers';
import { stripeCustomerCollectionRef } from '../../firebase/firebase';
import { BasketContextType, BasketItem } from '../basket';
import { PromoCodes } from './promo-codes';

let stripePromise: Promise<Stripe>;

const stripePublishKey_TEST = 'pk_live_51MxqrTHgT1AABCbEsoyHcesKWgzhCPFt6a40dGMiFjrLT5kAXLQcGMwZnKHqiYJzRBPyPUbPTTDUF8TaOVR2PKbm00xmLogwus';

const completeUrl = isLocalHost() ? 'http://shop.localhost:3000' : 'https://shop.clustermush.com';
const successUrl = completeUrl + '/success';
const cancelUrl = completeUrl + '/basket';

type CheckoutItem = {
    price: string,
    quantity: number
}

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

export const handleCheckout = (basketItems: BasketContextType, user: User): Promise<void> => {

    const checkoutSessions = collection(stripeCustomerCollectionRef, user.uid, "checkout_sessions");

    const checkoutItems = basketItems.items.map((bItem: BasketItem): CheckoutItem => {
        return {
            price: bItem.item.price_id,
            quantity: bItem.quantity
        }
    });

    return new Promise((resolve, reject) => {

        const bulkDiscount = basketItems.getTotalCost() >= 60 ? 
            (basketItems.getTotalCost() >= 90 ? PromoCodes.LARGE_CLUSTER : PromoCodes.SMALL_CLUSTER) : null

        addDoc(checkoutSessions, {
            mode: "payment",
            line_items: checkoutItems,
            success_url: successUrl,
            cancel_url: cancelUrl,
            shipping_rates: ['shr_1N5ahVHgT1AABCbEThyKFROr'],
            collect_shipping_address: true,
            shipping_address_collection: {
                allowed_countries: ['US']
            },
            automatic_tax: {
                enabled: true
            },
            promotion_code: bulkDiscount
        })
            .then(docRef => {
                const unSub = onSnapshot(docRef, checkoutDoc => {
                    if (checkoutDoc.get('error')) {
                        console.log(checkoutDoc.get('error'))
                        reject(new FailedToRedirectToCheckout(checkoutDoc.get('error')));
                        return;
                    }
                    const sessionId = checkoutDoc.get('sessionId');
                    if (sessionId) {
                        getStripe()
                            .then(stripe => {
                                stripe.redirectToCheckout({ sessionId })
                                    .then(() => {
                                        unSub();
                                        resolve();
                                    })
                                    .catch(error => reject(new FailedToRedirectToCheckout(error)));
                            });
                    }
                },
                    error => {
                        reject(new FailedToRedirectToCheckout(error));
                        return;
                    });
            })
            .catch(error => {
                console.log(error)
                reject(new FailedToRedirectToCheckout(error));
            })
    })

}
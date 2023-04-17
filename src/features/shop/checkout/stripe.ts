import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe>;

export const getStripe = () => {

    let NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string = process.env.REACT_APP_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '';

    console.log(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    if (NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === '') {
        throw new Error('Missing payment key');
    }

    if (!stripePromise) {
        stripePromise = new Promise((resolve, reject) => {
            loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
                .then(thing => {
                    if (thing === null) {
                        reject('Getting stripe returned null');
                        return;
                    }
                    resolve(thing);
                })
                .catch(() => {
                    reject('Unable to request stripe');
                });

        });
    }
    return stripePromise;
};

export async function handleCheckout() {
    console.log('getting stripe')
    const stripe = await getStripe();
    console.log('got stripe! starting checkout!')
    const { error } = await stripe.redirectToCheckout({
        lineItems: [
            {
                price: process.env.REACT_APP_NEXT_PUBLIC_STRIPE_PRICE_ID,
                quantity: 1,
            },
        ],
        mode: 'payment',
        successUrl: `https://shop.localhost:3000/success`,
        cancelUrl: `https://shop.localhost:3000/cancel`,
        customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
}
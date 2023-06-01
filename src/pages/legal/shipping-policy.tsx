import { Container, Link } from "@mui/material"
import { completeMainUrl, completeShopUrl } from "../../routing/routing-path-helpers"

import './legal.css';

export const ShippingPolicy = () => {
    return (
        <Container className='legalContainer'>
            <h1>Shipping & Delivery Policy</h1>
            <h3>Last updated June 1, 2023</h3>
            <p>
                This Shipping & Delivery Policy is part of our Terms of Use ("Terms") and should be therefore read alongside our main <Link href={`${completeMainUrl}/terms-of-use`}>https://clustermush.com/terms-of-use</Link>.
            </p>
            <p>
                Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.
            </p>
            <div>
                <h2>
                    WHAT ARE MY SHIPPING & DELIVERY OPTIONS?
                </h2>
                <p>
                    All packages will be sent through USPS First Class shipping which takes 1-5 business days and costs $5.00. Additionally, since some items are made to order, it can take up to 3 additional days before they are shipped.
                </p>
                <p>
                    All times and dates given for delivery of products are given in good faith but are estimates only.
                </p>
            </div>
            <div>
                <h2>DO YOU DELIVER INTERNATIONALLY?</h2>
                <p>
                    We do not offer international shipping.
                </p>
            </div>
            <div>
                <h2>ARE THERE OTHER SHIPPING RESTRICTIONS?</h2>
                <p>
                    Orders are only shipped on business days (Mon-Fri).
                </p>
            </div>
            <div>
                <h2>WHAT HAPPENS IF MY ORDER IS DELAYED?</h2>
                <p>
                    If delivery is delayed for any reason we will let you know as soon as possible and will give you a revised estimate date for delivery when possible.
                </p>
            </div>
            <div>
                <h2>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
                <p>
                    If you have any further questions or comments, you may contact us through our contact page: <Link href={`${completeShopUrl}/contact`}>https://shop.clustermush.com/contact</Link>.
                </p>
            </div>
        </Container>
    )
} 
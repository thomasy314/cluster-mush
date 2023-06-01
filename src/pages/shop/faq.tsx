import { Container } from "@mui/material"

export const FAQ = () => {
    return (
        <Container maxWidth='sm' style={{ textAlign: 'center' }}>
            <h1>Shipping</h1>

            <h2>How long does it take to get my item?</h2>
            <p>Please allow 1-2 days for your item to be shipped. This is because some items are made to order and can take up to 2 business days to be created. Once shipped, it will take 1-5 business days via USPS First Class shipping.</p>

            <h2>Where do you ship?</h2>
            <p>At the moment, Cluter Mush only ships within the United States. </p>
        </Container>
    )
}
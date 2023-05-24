import { Container, Link } from "@mui/material"

export const ReturnPolicy = () => {
    return (
        <Container sx={{paddingBottom:"10vh"}}>
            <h1>Return Policy</h1>
            <h3>Last updated May 22, 2023</h3>
            <p>
                Thank you for your purchase. We hope you are happy with your purchase. However,
                if you are not completely satisfied with your purchase for any reason, you may return
                it to us for a full refund or an exchange. Please see below for more information on
                our return policy.
            </p>
            <h2>Returns</h2>
            <p>
                All returns must be postmarked within fourteen (14) days of the purchase date. All
                returned items must be in new and unused condition, with all original tags and labels
                attached.
            </p>
            <h2>Return Process</h2>
            <p>
                To return an item, please email customer service at support@clustermush.com to
                obtain a Return Merchandise Authorization (RMA) number. After receiving a RMA
                number, place the item securely in its original packaging, and mail your return to the
                following address:
                Cluster Mush
                Attn: Returns
                RMA #
                3654 Phinney Avenue North, Unit 1
                Seattle, WA 98103
                United States
                Return shipping charges will be paid or reimbursed by us.
            </p>
            <h2>Refunds</h2>
            <p>
                After receiving your return and inspecting the condition of your item, we will process
                your return or exchange. Please allow at least seven (7) days from the receipt of your
                item to process your return or exchange. We will notify you by email when your return
                has been processed.
            </p>
            <h2>Exceptions</h2>
            <p>
                For defective or damaged products, please contact us at the contact details below to
                arrange a refund or exchange.
            </p>
            <h2>Questions</h2>
            <p>
                If you have any questions concerning our return policy, please contact us at support@clustermush.com or through the <Link href="/contact">contact page</Link>.
            </p>
            <hr />
            <p>
            This return policy was created using Termly's <Link href="https://termly.io/products/refund-return-policy-generator/">Return and Refund Policy Generator</ Link>.
            </p>
        </ Container>
    )
}
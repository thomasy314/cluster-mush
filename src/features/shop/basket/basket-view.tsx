import { Grid, Link } from "@mui/material";
import { useContext } from "react";
import { BasketContext, BasketItem } from "./basket.context";

import { BasketItemView } from "./basket-item-view";

export const BasketView = () => {

    const basket = useContext(BasketContext);

    const basketItems: JSX.Element[] = basket.items.map((item: BasketItem) => {
        return <BasketItemView key={item.item.id} item={item} />
    });

    return (
        <>
            <Grid container>
                <Grid item xs={7} md={5} style={{ paddingLeft: '20px' }}>
                    <p>Product</p>
                </Grid>
                <Grid item xs={2}>
                    <p>Price</p>
                </Grid>
                <Grid item xs={3} md={4}>
                    <p>Quantity</p>
                </Grid>
                <Grid item xs={0} md={1} display={{ xs: 'none', md: 'block'}}>
                    <p>Total</p>
                </Grid>
            </Grid>
            {basket.items.length ? basketItems : <p>Basket is empty</p>}
            <br />
            <hr />
            <Grid container>
                <Grid item xs={8} md={9} style={{ paddingLeft: '20px' }}>
                </Grid>
                <Grid item xs={3} md={2}>
                    <p>SubTotal:</p>
                </Grid>
                <Grid item xs={1}>
                    <p>{basket.getTotalCost()}</p>
                </Grid>
                <Grid item xs={9} md={0} />
                <Grid item xs={5} style={{ paddingLeft: '20px' }}>
                </Grid>
                <Grid item xs={7}>
                    <p style={{float: 'right'}}>Taxes and <Link href='/shipping'>shipping</Link> are calculated at checkout</p>
                </Grid>
            </Grid>
            <Grid container>
            </Grid>
        </>
    )
}
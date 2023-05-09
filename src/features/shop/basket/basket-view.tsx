import { Grid } from "@mui/material";
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
                <Grid item xs={6} md={4} style={{ paddingLeft: '20px' }}>
                    <p>Product</p>
                </Grid>
                <Grid item xs={2}>
                    <p>Price</p>
                </Grid>
                <Grid item xs={3} md={5}>
                    <p>Quantity</p>
                </Grid>
                <Grid item xs={1} zeroMinWidth>
                    <p>Total</p>
                </Grid>
            </Grid>
            {basket.items.length ? basketItems : <p>Basket is empty</p>}
            <br />
            <hr />
            <Grid container>
                <Grid item xs={9} style={{ paddingLeft: '20px' }}>
                </Grid>
                <Grid item xs={2}>
                    <p>SubTotal</p>
                </Grid>
                <Grid item xs={1}>
                    <p>{basket.getTotalCost()}</p>
                </Grid>
                <Grid xs={9} md={0} />
                <Grid item xs={5} style={{ paddingLeft: '20px' }}>
                </Grid>
                <Grid item xs={7}>
                    <p style={{float: 'right'}}>Taxes and <a href='/shipping'>shipping</a> are calculated at checkout</p>
                </Grid>
            </Grid>
            <Grid container>
            </Grid>
        </>
    )
}
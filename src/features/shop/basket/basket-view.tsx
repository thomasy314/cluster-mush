import { Grid } from "@mui/material";
import { useContext } from "react";
import { BasketContext, BasketItem } from "./basket.context";

import { BasketItemView } from "./basket-item-view";

export const BasketView = () => {

    const basket = useContext(BasketContext);

    const basketItems: JSX.Element[] = basket.items.map((item: BasketItem) => {
        return <BasketItemView key={item.item.id} item={item} />
    });

    const MoneyView = (props: { text: string, value: number }) => {
        return (
            <>
                <Grid item xs={8} md={9} style={{ paddingLeft: '20px' }}>
                </Grid>

                <Grid item xs={3} md={2}>
                    <p style={{ margin: '10px' }}>{props.text}</p>
                </Grid>
                <Grid item xs={1}>
                    <p style={{ margin: '10px', float: 'right' }}>{props.value.toFixed(2)}</p>
                </Grid>
                <Grid item xs={9} md={0} />
                <Grid item xs={5} style={{ paddingLeft: '20px' }}>
                </Grid>
            </>
        )
    }

    const discount = basket.getTotalCost() >= 90 ?
        (basket.getTotalCost() >= 150 ? 0.2 : 0.1) : 0;

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
                <Grid item xs={0} md={1} display={{ xs: 'none', md: 'block' }}>
                    <p>Total</p>
                </Grid>
            </Grid>
            {basket.items.length ? basketItems : <p>Basket is empty</p>}
            <br />
            <hr />
            <Grid container>
                <MoneyView text='SubTotal:' value={basket.getTotalCost()} />
                <MoneyView text='Discount:' value={-(basket.getTotalCost() * discount)} />
                <MoneyView text='Shipping:' value={5} />
                <br />
                <MoneyView text='Total:' value={basket.getTotalCost() + 5 - (basket.getTotalCost() * discount)} />
                {false && <Grid item xs={7}>
                    <p style={{ float: 'right' }}>Taxes and shipping are calculated at checkout</p>
                </Grid>}
            </Grid>
            <Grid container>
            </Grid>
        </>
    )
}
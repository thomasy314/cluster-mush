import { useContext } from "react";
import { BasketContext, BasketItem } from "./basket.context";

import { Button, Grid, Link } from "@mui/material";

import './basket-item-view.css';
import { stringToPath } from "../../../routing/routing-path-helpers";

type BasketItemViewProps = {
    item: BasketItem
}

export const BasketItemView = (props: BasketItemViewProps) => {

    const basket = useContext(BasketContext);


    return (
        <Grid container>
            <Grid item className="basketItemViewColumn" xs={4} md={2}>
                <img alt="basket item" className="basketItemImg" src={props.item.item.image} />
            </Grid>
            <Grid item className="basketItemViewColumn" xs={3}>
                <Link href={stringToPath(props.item.item.name)} style={{}}><p>{props.item.item.name}</p></Link>
            </Grid>
            <Grid item className="basketItemViewColumn" xs={2}>
                <p>{props.item.item.price}</p>
            </Grid>
            <Grid item className="basketItemViewColumn" xs={3} md={4}>
                <p className="basketItemViewQuantityText">{basket.getProductQuantity(props.item.item)}</p>
                <div>
                    <Button className='basketItemViewQuantityButton' variant='outlined' color='primary' onClick={() => basket.addOneToBasket(props.item.item)}>+</Button>
                    <br />
                    <br />
                    <Button className='basketItemViewQuantityButton' variant='outlined' color='primary' onClick={() => basket.removeOneFromBasket(props.item.item)}>-</Button>
                </div>
            </Grid>
            <Grid item className="basketItemViewColumn" xs={0} md={1} display={{ xs: 'none', md: 'block'}}>
                <p>{props.item.item.price * basket.getProductQuantity(props.item.item)}</p>
            </Grid>
        </Grid>
    )
}

/*<input className='basketItemViewQuantityInput' pattern={'[0-9]*'} type="number" value={basket.getProductQuantity(props.item.item)} onChange={event => {
    if (event.target.value.length <= 1) return;
    //basket.setQuantityInBasket(props.item.item, +event.target.value)
}}></input>*/
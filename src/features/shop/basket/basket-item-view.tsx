import { Button } from "@mui/base";
import { useContext } from "react";
import { BasketContext, BasketItem } from "./basket.context";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { Grid } from "@mui/material";
import './basket-item-view.css';

type BasketItemViewProps = {
    item: BasketItem
}

export const BasketItemView = (props: BasketItemViewProps) => {

    const basket = useContext(BasketContext);

    return (
        <Grid container>
            <Grid item>
                <img alt="basket item" className="basketItemImg" src={props.item.item.image} />
            </Grid>
            <Grid item>
                <div className="basketViewItemInfo">
                    <p>Item: {props.item.item.name}</p>
                    <p>Quantity: {props.item.quantity}</p>
                </div>
                <Button onClick={() => basket.removeOneFromBasket(props.item.item)}>-</Button>
                <Button onClick={() => basket.addOneToBasket(props.item.item)}>+</Button>
            </Grid>
            <Grid item>
                <Button onClick={() => basket.deleteFromBasket(props.item.item)}>
                    <DeleteOutlineIcon />
                </Button>
            </Grid>
        </Grid>
    )
}
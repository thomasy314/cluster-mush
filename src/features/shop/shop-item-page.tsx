import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import CollapseCard from '../ui/collapse-card/collapse-card';
import FullSplitPageLayout from '../ui/full-split-layout/full-split-page-layout';
import { BasketContext } from './basket/basket.context';
import { ShopItemInfo } from './data-objects';
import { getShopItemById } from './item-data';

import './shop-item-page.css';

type ShopItemPageProps = {
    shopItemInfoId: string
}

export const ShopItemPage = (props: ShopItemPageProps) => {

    const [shopItemLoaded, setShopItemLoaded] = useState<Boolean>(false);
    const [selectedItem, setSelectedItem] = useState<ShopItemInfo>({
        name: '',
        price: 0,
        image: '',
        available: false,
        id: '',
        stripeId: ''
    })

    const basket = useContext(BasketContext);

    const title = <h1>{selectedItem.name}</h1>;


    useEffect(() => {
        getShopItemById(props.shopItemInfoId)
            .then(shopItem => {
                setSelectedItem(shopItem);
                setShopItemLoaded(true);
            });
    }, [props.shopItemInfoId]);

    // TODO: add description
    const test: JSX.Element = (
        <FullSplitPageLayout titleComponent={title} imageSrc={selectedItem.image} smallImage>
            <p>${selectedItem.price.toFixed(2)}</p>
            <Button variant='outlined' style={{ borderColor: 'black', color: 'black' }} onClick={() => basket.addOneToBasket(selectedItem)}>Add to basket</Button>
            <br />
            <hr className="shopItemDivideLine" />
            <br />
            <p>{selectedItem.name}</p>
            <CollapseCard boldTitle={false} title="Shipping and Returns">
                <p>NO RETURNS NO SHIPPING</p>
            </CollapseCard>
        </FullSplitPageLayout>)

    return (
        <>
            {shopItemLoaded ? test : <p>LOADING</p>}
        </>
    )

    /*
        <ul>
            {props.storePageInfo.itemBulletNotes.map(bulletNote => 
                (<li>{bulletNote}</li>)
            )}
        </ul>
    */
}
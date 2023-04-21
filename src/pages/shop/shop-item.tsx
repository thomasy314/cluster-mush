import { Button, Theme, useMediaQuery, useTheme } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CollapseCard } from '../../features/ui/collapse-card/collapse-card';
import { FullSplitPageLayout } from '../../features/ui/full-split-layout/full-split-page-layout';
import { BasketContext } from '../../features/shop/basket/basket.context';
import { ShopItemInfo } from '../../features/shop/data-objects';
import { getShopItemById } from '../../features/shop/item-data';

import './shop-item.css';

type ShopItemPageProps = {
    shopItemInfoId: string
}

export const ShopItemPage = (props: ShopItemPageProps) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [selectedItem, setSelectedItem] = useState<ShopItemInfo>({
        name: '',
        price: 0,
        image: '',
        available: false,
        id: '',
        stripeId: ''
    })

    const basket = useContext(BasketContext);

    const theme: Theme = useTheme();
    const lessThanMd: boolean = useMediaQuery(theme.breakpoints.down('md'));

    const title = <h1>{selectedItem.name}</h1>;

    useEffect(() => {
        getShopItemById(props.shopItemInfoId)
            .then(shopItem => {
                setSelectedItem(shopItem);
                setLoading(false);
            });
    }, [props.shopItemInfoId]);

    // TODO: add description

    const hrLineStyle = {
        width: '100%'
    }

    return (
        <>
            <FullSplitPageLayout loading={loading} titleComponent={title} imageSrc={selectedItem.image} smallImage>
                <p>${selectedItem.price.toFixed(2)}</p>
                <p>{selectedItem.name}</p>
                <Button onClick={() => basket.addOneToBasket(selectedItem)}>Add to basket</Button>
                <br />
                <hr style={hrLineStyle} className="shopItemDivideLine" />
                <br />
                <CollapseCard boldTitle={false} title="Shipping and Returns">
                    <p>NO RETURNS NO SHIPPING</p>
                </CollapseCard>
            </FullSplitPageLayout>
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
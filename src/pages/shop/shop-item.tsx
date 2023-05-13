import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CollapseCard } from '../../features/ui/collapse-card/collapse-card';
import { FullSplitPageLayout } from '../../features/ui/full-split-layout/full-split-page-layout';
import { BasketContext } from '../../features/shop/basket/basket.context';
import { ShopItemInfo } from '../../features/shop/data-objects';
import { getShopItemById } from '../../features/shop/item-data';

import './shop-item.css';
import { useNavigate } from 'react-router-dom';

type ShopItemPageProps = {
    shopItemInfoId: string
}

export const ShopItemPage = (props: ShopItemPageProps) => {

    const [loading, setLoading] = useState<boolean>(true);

    const [addedToCart, setAddedToCart] = useState<NodeJS.Timeout | null>(null);

    const [selectedItem, setSelectedItem] = useState<ShopItemInfo>({
        name: '',
        description: '',
        price: 0,
        image: '',
        available: false,
        id: '',
        price_id: ''
    })

    const basket = useContext(BasketContext);

    const title = <h1>{selectedItem.name}</h1>;

    const navigate = useNavigate();

    useEffect(() => {
        getShopItemById(props.shopItemInfoId)
            .then(shopItem => {
                setSelectedItem(shopItem);
                setLoading(false);
            })
            .catch(err => {
                navigate('/');
            })
    }, [props.shopItemInfoId]);

    const addToBasket = () => {
        if (addedToCart) clearTimeout(addedToCart);
        const newTimeout = setTimeout(() => setAddedToCart(null), 5000);
        setAddedToCart(newTimeout);
        basket.addOneToBasket(selectedItem)
    }

    return (
        <>
            <FullSplitPageLayout loading={loading} titleComponent={title} imageSrc={selectedItem.image} smallImage>
                <p>${selectedItem.price.toFixed(2)}</p>
                <Button onClick={addToBasket}>Add to basket</Button>
                {addedToCart && <p>Added!</p>}
                <p><i>{selectedItem.description}</i></p>
                <br />
                <hr style={{ width: '100%' }} className="shopItemDivideLine" />
                <br />
                <CollapseCard boldTitle={false} title="Shipping">
                    <p>Please allow 1-2 days for your item to be shipped. This is because some items are made to order and can take up to 2 days to be created. Once shipped, it will take 1-5 days via USPS First Class shipping.</p>
                </CollapseCard>
            </FullSplitPageLayout>
        </>
    )
}
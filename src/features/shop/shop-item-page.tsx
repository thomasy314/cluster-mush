import { Button } from '@mui/material';
import FullSplitPageLayout from '../ui/full-split-layout/full-split-page-layout';
import CollapseCard from '../ui/collapse-card/collapse-card';
import './shop-item-page.css';
import { ShopItemPageInfo } from './data-objects/shop-item-page-info';
import { useContext, useState } from 'react';
import { ShopItemInfo } from './data-objects';
import { BasketContext } from './basket/basket.context';
import { BasketView } from './basket/basket-view';

type ShopItemPageProps = {
    itemPageInfo: ShopItemPageInfo
}

export const ShopItemPage = (props: ShopItemPageProps) => {

    const [selectedItem, setSelectedItem] = useState<ShopItemInfo>(props.itemPageInfo.items[0]);

    const basket = useContext(BasketContext);

    const title = <h1>{props.itemPageInfo.name}</h1>;

    return (
        <FullSplitPageLayout titleComponent={title} imageSrc={selectedItem.image} smallImage>
            <p>{selectedItem.price}</p>
            <Button variant='outlined' style={{borderColor: 'black', color: 'black'}} onClick={() => basket.addOneToCart(selectedItem)}>Add to basket</Button>
            <br/>
            <hr className="shopItemDivideLine"/>
            <br/>
            <p>{props.itemPageInfo.description}</p>
            <CollapseCard boldTitle={false} title="Shipping and Returns">
                <p>NO RETURNS NO SHIPPING</p>
            </CollapseCard>
            <BasketView />
        </FullSplitPageLayout>
    )

        /*
            <ul>
                {props.storePageInfo.itemBulletNotes.map(bulletNote => 
                    (<li>{bulletNote}</li>)
                )}
            </ul>
        */
}
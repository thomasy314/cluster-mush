import { Button } from '@mui/material';
import FullSplitPageLayout from '../ui/full-split-layout/full-split-page-layout';
import CollapseCard from '../ui/collapse-card/collapse-card';
import './shop-item-page.css';
import { ShopItemPageInfo } from './data-objects/shop-item-page-info';

type ShopItemPageProps = {
    storePageInfo: ShopItemPageInfo
}

export const ShopItemPage = (props: ShopItemPageProps) => {

    const title = <h1>{props.storePageInfo.itemName}</h1>;

    return (
        <FullSplitPageLayout titleComponent={title} imageSrc={props.storePageInfo.itemImages[0]} smallImage>
            <p>{props.storePageInfo.getItemPriceText()}</p>
            <Button variant='outlined' style={{borderColor: 'black', color: 'black'}}>Add to basket</Button>
            <p>{props.storePageInfo.itemDescription}</p>
            <ul>
                {props.storePageInfo.itemBulletNotes.map(bulletNote => 
                    (<li>{bulletNote}</li>)
                )}
            </ul>
            <br/>
            <hr style={{width:"30%", float:"left"}}/>
            <br/>
            <CollapseCard boldTitle={false} title="Shipping and Returns">
                <p>NO RETURNS</p>
            </CollapseCard>
        </FullSplitPageLayout>
    )
}
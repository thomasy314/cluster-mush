import { Button } from '@mui/material';
import FullSplitPageLayout from '../../features/ui/full-split-layout/full-split-page-layout';
import CollapseCard from '../../features/ui/collapse-card/collapse-card';
import './shop-item-page.css';

const ShopItemPage = ({storePageInfo}) => {

    const title = <h1>{storePageInfo.itemName}</h1>;

    return (
        <FullSplitPageLayout titleComponent={title} imageSrc={storePageInfo.itemImages[0]} smallImage>
            <p>{storePageInfo.getItemPriceText()}</p>
            <Button variant='outlined' style={{borderColor: 'black', color: 'black'}}>Add to basket</Button>
            <p>{storePageInfo.itemDescription}</p>
            <ul>
                {storePageInfo.itemBulletNotes.map(bulletNote => 
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

export default ShopItemPage;
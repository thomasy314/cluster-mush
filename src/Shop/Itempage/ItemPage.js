
import { Button } from '@mui/material';
import FullSplitPage from '../../Common/FullSplitPage';
import CollapseCard from '../../Common/CollapseCard';
import './ItemPage.css';

const ItemPage = ({storePageInfo}) => {

    const title = <h1>{storePageInfo.itemName}</h1>

    return (
        <FullSplitPage titleComponent={title} imageSrc={storePageInfo.itemImages[0]} smallImage>
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
            <CollapseCard boldTitle={false} title="Shipping and Returns">
                <p>NO RETURNS</p>
            </CollapseCard>
        </FullSplitPage>
    )
}

export default ItemPage;
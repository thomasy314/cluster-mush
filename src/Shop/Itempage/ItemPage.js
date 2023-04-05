
import FullSplitPage from '../../Common/FullSplitPage';
import './ItemPage.css';

const ItemPage = ({storePageInfo}) => {

    const title = <h1>{storePageInfo.itemName}</h1>

    return (
        <FullSplitPage titleComponent={title} imageSrc={storePageInfo.itemImages[0]} smallImage>
            <p>{storePageInfo.itemDescription}</p>
        </FullSplitPage>
    )
}

export default ItemPage;
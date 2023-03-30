
import FullSplitPage from '../../Common/FullSplitPage';
import './ItemPage.css';

import shiitakeImage from '../../Photos/Shiitake/TOM02800.jpg';

const ItemPage = ({itemInfo}) => {

    const title = <h1>Shiitake Earrings</h1>

    return (
        <FullSplitPage titleComponent={title} imageSrc={shiitakeImage}>
            <p>Hey YOU! Buy some earrings here why don't ya?</p>
        </FullSplitPage>
    )
}

export default ItemPage;
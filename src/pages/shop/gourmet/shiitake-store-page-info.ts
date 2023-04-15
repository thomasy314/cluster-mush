import { ShopItemPageInfo } from '../../../features/shop/data-objects/shop-item-page-info';

import shiitakePhoto from '../../../assets/photos/shiitake/shiitake.png';
import { ShopItemInfo } from '../../../features/shop/data-objects';

const ShiitakeItemInfo: ShopItemInfo = new ShopItemInfo(
    'Shiitake Earring',
    30.00,
    shiitakePhoto,
);

export const ShiitakeStorePageInfo = new ShopItemPageInfo(
    'Shiitake',
    'Mushhi',
    [ShiitakeItemInfo],
);
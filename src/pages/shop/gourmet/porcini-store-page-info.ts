import { ShopItemPageInfo } from '../../../features/shop/data-objects/shop-item-page-info';

import porciniPhoto from '../../../assets/photos/porcini/porcini.jpg';
import { ShopItemInfo } from '../../../features/shop/data-objects';

const PorciniItemInfo: ShopItemInfo = new ShopItemInfo(
    'Porcini Earring',
    30.00,
    porciniPhoto
);

export const PorciniStorePageInfo = new ShopItemPageInfo(
    'Porcini',
    'Mushhi',
    [PorciniItemInfo]
);
import { ShopItemPageInfo } from '../../../features/shop/data-objects/shop-item-page-info';

import oysterPhoto from '../../../assets/photos/oyster/oyster.jpg';
import { ShopItemInfo } from '../../../features/shop/data-objects';

const OysterItemInfo: ShopItemInfo = new ShopItemInfo(
    'Oyster Earring',
    30.00,
    oysterPhoto
);

export const OysterStorePageInfo = new ShopItemPageInfo(
    'Oyster',
    'Mushhi',
    [OysterItemInfo]
);
import { ShopItemPageInfo } from '../../../features/shop/data-objects/shop-item-page-info';

import oysterPhoto from '../../../assets/photos/oyster/oyster.jpg';
import { ShopItemInfo } from '../../../features/shop/data-objects';

const OysterItemInfo: ShopItemInfo = {
    name: 'Oyster Earring',
    price: 30.00,
    image: oysterPhoto
};

export const OysterStorePageInfo = new ShopItemPageInfo(
    'Oyster',
    'Mushhi',
    [OysterItemInfo]
);
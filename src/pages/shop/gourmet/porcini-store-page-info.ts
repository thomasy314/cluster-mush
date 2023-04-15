import { ShopItemPageInfo } from '../../../features/shop/data-objects/shop-item-page-info';

import porciniPhoto from '../../../assets/photos/porcini/porcini.jpg';
import { ShopItemInfo } from '../../../features/shop/data-objects';

const PorciniItemInfo: ShopItemInfo = {
    name: 'Porcini Earring',
    price: 30.00,
    image: porciniPhoto
};

export const PorciniStorePageInfo = new ShopItemPageInfo(
    'Porcini',
    'Mushhi',
    [PorciniItemInfo]
);
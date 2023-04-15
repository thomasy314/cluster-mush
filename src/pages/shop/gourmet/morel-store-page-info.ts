import { ShopItemPageInfo } from '../../../features/shop/data-objects/shop-item-page-info';

import morelPhoto from '../../../assets/photos/morel/morel.jpg';
import { ShopItemInfo } from '../../../features/shop/data-objects';

const MorelItemInfo: ShopItemInfo = {
    name: 'Morel Earring',
    price: 30.00,
    image: morelPhoto
};

export const MorelStorePageInfo = new ShopItemPageInfo(
    'Morel',
    'Fungal earring inspired by the infomous morel',
    [MorelItemInfo]
);
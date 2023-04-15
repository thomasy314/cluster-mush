import { ShopItemPageInfo } from '../../../features/shop/data-objects/shop-item-page-info';

import enokiPhoto from '../../../assets/photos/enoki/enoki.jpg';
import { ShopItemInfo } from '../../../features/shop/data-objects';

const EnokiItemInfo: ShopItemInfo = {
    name: 'Enoki Earring',
    price: 30.00,
    image: enokiPhoto,
};

export const EnokiStorePageInfo: ShopItemPageInfo = new ShopItemPageInfo(
    'Enoki',
    'Lonk',
    [EnokiItemInfo] 
);
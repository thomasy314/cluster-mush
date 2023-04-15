import { ShopItemPageInfo } from '../../../features/shop/data-objects/shop-item-page-info';

import enokiPhoto from '../../../assets/photos/enoki/enoki.jpg';
import { ShopItemInfo } from '../../../features/shop/data-objects';

const EnokiItemInfo: ShopItemInfo = new ShopItemInfo(
    'Enoki Earring',
    30.00,
    enokiPhoto,
);

export const EnokiStorePageInfo: ShopItemPageInfo = new ShopItemPageInfo(
    'Enoki',
    'Lonk',
    [EnokiItemInfo] 
);
import { ShopItemPageInfo } from '../../../features/shop/data-objects/shop-item-page-info';
//import { resinEarringBulletNotes } from "../../../../features/shop/data-objects/common-resin-earring-values";

import morelPhoto from '../../../assets/photos/morel/morel.jpg';

const MorelStorePageInfo = new ShopItemPageInfo(
    'Morel',
    'Fungal earring inspired by the infomous morel',
    [],
    [morelPhoto],
    30.00
);

export default MorelStorePageInfo;
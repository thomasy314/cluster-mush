import StorePageInfo from "../../../shopData/StorepageInfo";
import { resinEarringBulletNotes } from "../shopItemConstants/CommonItemBulletNotes";

import morelPhoto from '../../../../resources/photos/morel/morel.jpg';

const MorelStorePageInfo = new StorePageInfo(
    'Morel',
    'Fungal earring inspired by the infomous morel',
    [...resinEarringBulletNotes],
    [morelPhoto],
    30.00
);

export default MorelStorePageInfo;
// @ts-ignore - need to have .ts for some reason
import StorePageInfo from "../../../DataClasses/StorepageInfo.ts";
// @ts-ignore - need to have .ts for some reason
import { resinEarringBulletNotes } from "../Common/ItemBulletNotes.ts";

import morelPhoto from '../../../../Photos/Morel/morel.jpg';

export default new StorePageInfo(
    'Morel',
    'Fungal earring inspired by the infomous morel',
    [...resinEarringBulletNotes],
    [morelPhoto],
    30.00
);
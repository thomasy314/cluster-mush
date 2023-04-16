import { Route, Routes } from "react-router-dom";
import { ShopItemPage } from '../features/shop';
import { gourmetEarringIds } from "../features/shop/item-data";
import { Shop } from "../pages/shop";
import { Basket } from "../pages/shop/basket";

/*const shopPages = shopItemPageList.map(itemPageInfo =>
    <Route path={itemPageInfo.path} element={<ShopItemPage itemPageInfo={itemPageInfo} />} />
);*/

export const ShopRoutes = () => {

    return (
        <Routes>
            <Route index element={<Shop />} />
            <Route path='/basket' element={<Basket />} />
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom";
import { ShopItemPage } from '../features/shop';
import { Shop, shopItemPageList } from "../pages/shop";

const shopPages = shopItemPageList.map(shopPageInfo =>
    <Route path={shopPageInfo.getPath()} element={<ShopItemPage storePageInfo={shopPageInfo} />} />
);

export const ShopRoutes = () => {

    return (
        <Routes>
            <Route index element={<Shop />} />
            {shopPages}
        </Routes>
    )
}
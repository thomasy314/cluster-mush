import { Route, Routes } from "react-router-dom";
import { ShopItemPage } from '../features/shop';
import { Shop, shopItemPageList } from "../pages/shop";

const shopPages = shopItemPageList.map(itemPageInfo =>
    <Route path={itemPageInfo.getPath()} element={<ShopItemPage itemPageInfo={itemPageInfo} />} />
);

export const ShopRoutes = () => {

    return (
        <Routes>
            <Route index element={<Shop />} />
            {shopPages}
        </Routes>
    )
}
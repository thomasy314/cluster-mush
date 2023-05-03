import { Route, Routes } from "react-router-dom";
import { gourmetEarringIds } from "../features/shop/item-data";
import { Shop, ShopItemPage } from "../pages/shop";
import { Basket } from "../pages/shop";
import { createUnknownPathRedirect } from "./routing-path-helpers";


const shopPages = Object.entries(gourmetEarringIds).map(([shopItemPath, id]: [string, string]) => 
    <Route key={shopItemPath} path={shopItemPath} element={<ShopItemPage shopItemInfoId={id} />} />
);

export const ShopRoutes = () => {

    return (
        <Routes>
            <Route index element={<Shop />} />
            <Route path='/basket' element={<Basket />} />
            {shopPages}
            {createUnknownPathRedirect()}
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom";
import { gourmetEarringIds } from "../features/shop/item-data";
import { AccountPage } from "../pages/account";
import { Basket, Shop, ShopItemPage } from "../pages/shop";
import { createUnknownPathRedirect } from "./routing-path-helpers";


const shopPages = Object.entries(gourmetEarringIds).map(([shopItemPath, id]: [string, string]) => 
    <Route key={shopItemPath} path={shopItemPath} element={<ShopItemPage shopItemInfoId={id} />} />
);

export const ShopRoutes = () => {

    return (
        <Routes>
            <Route index element={<Shop />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/login' element={<AccountPage />} />
            <Route path='/account' element={<AccountPage />} />
            {shopPages}
            {createUnknownPathRedirect()}
        </Routes>
    )
}
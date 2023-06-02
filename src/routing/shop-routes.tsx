import { Route, Routes } from "react-router-dom";
import { gourmetEarringIds } from "../features/shop/item-data";
import { AccountPage } from "../pages/account";
import { DeleteMyDataPage } from "../pages/legal";
import { mushroomInfoPageList } from "../pages/mushroom-info-page";
import { Basket, Shop, ShopFAQ, ShopItemPage } from "../pages/shop";
import { CommonRoutes } from "./common-routes";
import { createUnknownPathRedirect, stringToPath } from "./routing-path-helpers";


const shopPages = Object.entries(gourmetEarringIds).map(([shopItemPath, id]: [string, string]) =>
    <Route key={shopItemPath} path={shopItemPath} element={<ShopItemPage shopItemInfoId={id} />} />
);

const specificMushroomPages = mushroomInfoPageList.map(infoPage => 
    <Route key={`specific_mush_page_${infoPage.name}`} path={stringToPath(infoPage.name)} element={<Shop specificMushroom={infoPage.name} />} />
)

export const ShopRoutes = () => {

    return (
        <Routes>
            <Route index element={<Shop />} />
            {specificMushroomPages}
            {CommonRoutes}
            <Route path='/basket' element={<Basket />} />
            <Route path='/login' element={<AccountPage />} />
            <Route path='/account' element={<AccountPage />} />
            <Route path='/shop-faq' element={<ShopFAQ />} />
            {shopPages}
            <Route path='/delete-my-data' element={<DeleteMyDataPage />} />
            {createUnknownPathRedirect()}
        </Routes>
    )
}
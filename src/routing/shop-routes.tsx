import { Route, Routes } from "react-router-dom";
import { gourmetEarringIds } from "../features/shop/item-data";
import { AccountPage } from "../pages/account";
import { Basket, ShippingInfo, Shop, ShopItemPage } from "../pages/shop";
import { createUnknownPathRedirect, stringToPath } from "./routing-path-helpers";
import { mushroomInfoPageList } from "../pages/mushroom-info-page";


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
            <Route path='/basket' element={<Basket />} />
            <Route path='/login' element={<AccountPage />} />
            <Route path='/account' element={<AccountPage />} />
            <Route path='/shipping' element={<ShippingInfo />} />
            {shopPages}
            {createUnknownPathRedirect()}
        </Routes>
    )
}
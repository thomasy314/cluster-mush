import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import ComingShroom from './pages/coming-shroom/coming-shroom';
import StyleGuide from './pages/style-guide/style-guide';

// Info Pages

import { MushroomInfoPage } from './features/mushroom-info-page';
import {
  CommonTableInfo,
  EnokiInfo,
  MaitakeInfo,
  OysterInfo,
  ShiitakeInfo
} from './pages/mushroom-info-page/gourmet'

import { Shop, ShopItemPage, CartProvider } from './features/shop'

import { ShiitakeStorePageInfo, EnokiStorePageInfo, OysterStorePageInfo } from './pages/shop/gourmet';

import NavBar from './features/ui/nav-bar/nav-bar';

function App() {

  const inShop = window.location.host.includes("shop");

  const mainRoutes =
    <>
      <Route index element={<ComingShroom />} />
      <Route path="/style-guide" element={<StyleGuide />} />
      <Route path="/common-table" element={<MushroomInfoPage mushroomInfo={CommonTableInfo} />} />
      <Route path="/enoki" element={<MushroomInfoPage mushroomInfo={EnokiInfo} />} />
      <Route path="/maitake" element={<MushroomInfoPage mushroomInfo={MaitakeInfo} />} />
      <Route path="/oyster" element={<MushroomInfoPage mushroomInfo={OysterInfo} />} />
      <Route path="/shiitake" element={<MushroomInfoPage mushroomInfo={ShiitakeInfo} />} />
    </>

  const shopRoutes =
    <CartProvider>
      <Route index element={<Shop />} />
      <Route path="/shiitake" element={<ShopItemPage storePageInfo={ShiitakeStorePageInfo} />} />
      <Route path="/enoki" element={<ShopItemPage storePageInfo={EnokiStorePageInfo} />} />
      <Route path="/oyster" element={<ShopItemPage storePageInfo={OysterStorePageInfo} />} />
    </CartProvider>

  return (
    <Container disableGutters maxWidth={false}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {inShop ? shopRoutes : mainRoutes}
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
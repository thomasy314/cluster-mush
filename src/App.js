import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import ComingShroom from './comingShroom/ComingShroom';
import MushroomInfoPage from './mushroomInfoPage/MushroomInfoPage';
import StyleGuide from './styleGuide/StyleGuide';

import CommonTableInfo from './mushroomInfoPage/mushroomInfoPages/Gourmet/CommonTable.ts';
import EnokiInfo from './mushroomInfoPage/mushroomInfoPages/Gourmet/Enoki.ts';
import MaitakeInfo from './mushroomInfoPage/mushroomInfoPages/Gourmet/Maitake.ts';
import OysterInfo from './mushroomInfoPage/mushroomInfoPages/Gourmet/Oyster.ts';
import ShiitakeInfo from './mushroomInfoPage/mushroomInfoPages/Gourmet/Shiitake.ts';

import Shop from './shop/Shop';
import ItemPage from './shop/shopItemPage/ShopItemPage';

import ShiitakeStorePageInfo from './shop/shopItemPage/shopItemPages/gourmet/ShiitakeStorePageInfo.ts'
import EnokiStorePageInfo from './shop/shopItemPage/shopItemPages/gourmet/EnokiStorePageInfo.ts'
import OysterStorePageInfo from './shop/shopItemPage/shopItemPages/gourmet/OysterStorePageInfo.ts'

import NavBar from './common/navBar/NavBar';

import ContextProvider from './shop/CartContext';

function App() {

  const inShop = window.location.host.includes("shop");

  const mainRoutes = 
    <>
      <Route index element={<ComingShroom />} />
      <Route path="/style-guide" element={<StyleGuide />} />
      <Route path="/common-table" element={<MushroomInfoPage mushroomInfo={CommonTableInfo}/>} />
      <Route path="/enoki" element={<MushroomInfoPage mushroomInfo={EnokiInfo}/>} />
      <Route path="/maitake" element={<MushroomInfoPage mushroomInfo={MaitakeInfo}/>} />
      <Route path="/oyster" element={<MushroomInfoPage mushroomInfo={OysterInfo}/>} />
      <Route path="/shiitake" element={<MushroomInfoPage mushroomInfo={ShiitakeInfo}/>} />
    </>
  
  const shopRoutes = 
    <ContextProvider>
      <Route index element={<Shop />} />
      <Route path="/shiitake" element={<ItemPage storePageInfo={ShiitakeStorePageInfo}/>} />
      <Route path="/enoki" element={<ItemPage storePageInfo={EnokiStorePageInfo}/>} />
      <Route path="/oyster" element={<ItemPage storePageInfo={OysterStorePageInfo}/>} />
    </ContextProvider>

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
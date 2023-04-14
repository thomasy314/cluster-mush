import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComingShroom from './ComingShroom/ComingShroom';
import MushroomInfoPage from './MushroomInfoPage/MushroomInfoPage';
import StyleGuide from './StyleGuide/StyleGuide';

import CommonTableInfo from './MushroomInfoPage/MushroomInfoPages/Gourmet/CommonTable.ts';
import EnokiInfo from './MushroomInfoPage/MushroomInfoPages/Gourmet/Enoki.ts';
import MaitakeInfo from './MushroomInfoPage/MushroomInfoPages/Gourmet/Maitake.ts';
import OysterInfo from './MushroomInfoPage/MushroomInfoPages/Gourmet/Oyster.ts';
import ShiitakeInfo from './MushroomInfoPage/MushroomInfoPages/Gourmet/Shiitake.ts';

import Shop from './Shop/Shop';
import ItemPage from './Shop/Itempage/ItemPage';

import ShiitakeStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/ShiitakeStorePageInfo.ts'
import PorciniStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/PorciniStorePageInfo.ts'
import EnokiStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/EnokiStorePageInfo.ts'
import MorelStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/MorelStorePageInfo.ts'
import OysterStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/OysterStorePageInfo.ts'

import NavBar from './Common/NavBar/NavBar';

import ContextProvider from './Shop/CartContext';

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
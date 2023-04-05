import { Container, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComingShroom from './ComingShroom/ComingShroom';
import MushroomInfoPage from './MushroomInfoPage/MushroomInfoPage';
import StyleGuide from './StyleGuide/StyleGuide';
import ShiitakeInfo from './MushroomInfoPage/MushroomInfoPages/Shiitake.ts';

import Shop from './Shop/Shop';
import ItemPage from './Shop/Itempage/ItemPage';

import ShiitakeStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/ShiitakeStorePageInfo.ts'
import PorciniStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/PorciniStorePageInfo.ts'
import EnokiStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/EnokiStorePageInfo.ts'
import MorelStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/MorelStorePageInfo.ts'
import OysterStorePageInfo from './Shop/Itempage/ItemPages/Gourmet/OysterStorePageInfo.ts'

function App() {

  const inShop = window.location.host.includes("shop");

  const mainRoutes = 
    <>
      <Route index element={<ComingShroom />} />
      <Route path="/style-guide" element={<StyleGuide />} />
      <Route path="/shiitake" element={<MushroomInfoPage mushroomInfo={ShiitakeInfo}/>} />
    </>
  
  const shopRoutes = 
    <>
      <Route index element={<Shop />} />
      <Route path="/shiitake" element={<ItemPage storePageInfo={ShiitakeStorePageInfo}/>} />
      <Route path="/porcini" element={<ItemPage storePageInfo={PorciniStorePageInfo}/>} />
      <Route path="/enoki" element={<ItemPage storePageInfo={EnokiStorePageInfo}/>} />
      <Route path="/morel" element={<ItemPage storePageInfo={MorelStorePageInfo}/>} />
      <Route path="/oyster" element={<ItemPage storePageInfo={OysterStorePageInfo}/>} />
    </>

    return (
      <Container disableGutters maxWidth={false}>
        <BrowserRouter>
          <Routes>
            {inShop ? shopRoutes : mainRoutes}
          </Routes>
        </BrowserRouter>
      </Container>
    );
}

export default App;
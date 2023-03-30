import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComingShroom from './ComingShroom/ComingShroom';
import MushroomInfoPage from './MushroomInfoPage/MushroomInfoPage';
import StyleGuide from './StyleGuide/StyleGuide';
import ShiitakeInfo from './MushroomInfoPage/MushroomInfoPages/Shiitake.ts';
import Shop from './Shop/Shop';
import ItemPage from './Shop/Itempage/ItemPage';

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
      <Route path="/shiitake" element={<ItemPage/>} />
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
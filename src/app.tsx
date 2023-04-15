import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './app.css';

import { MainRoutes, ShopRoutes } from './routing';

import NavBar from './features/ui/nav-bar/nav-bar';
import { BasketProvider } from './features/shop';

function App() {

  const inShop = window.location.host.includes("shop");

  return (
    <Container disableGutters maxWidth={false}>
      <NavBar />
      <BasketProvider>
        <BrowserRouter>
          {inShop ? <ShopRoutes /> : <MainRoutes />}
        </BrowserRouter>
      </BasketProvider>
    </Container>
  );
}

export default App;
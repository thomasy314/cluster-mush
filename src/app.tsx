import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './app.css';

import { MainRoutes, ShopRoutes } from './routing';

import NavBar from './features/ui/nav-bar/nav-bar';

function App() {

  const inShop = window.location.host.includes("shop");

  return (
    <Container disableGutters maxWidth={false}>
      <NavBar />
      <BrowserRouter>
        {inShop ? <ShopRoutes /> : <MainRoutes />}
      </BrowserRouter>
    </Container>
  );
}

export default App;
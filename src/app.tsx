import { Container, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './app.css';

import { MainRoutes, ShopRoutes } from './routing';

import { NavBar, NavBarVariation } from './features/ui/nav-bar/nav-bar';
import { BasketProvider } from './features/shop';
import { inShop } from './routing/routing-path-helpers';
import { theme } from './features/ui';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BasketProvider>
        <Container disableGutters maxWidth={false}>
          <NavBar variation={inShop() ? NavBarVariation.SHOP : NavBarVariation.MAIN} />
          <BrowserRouter>
            {inShop() ? <ShopRoutes /> : <MainRoutes />}
          </BrowserRouter>
        </Container>
      </BasketProvider>
    </ThemeProvider>
  );
}

export default App;
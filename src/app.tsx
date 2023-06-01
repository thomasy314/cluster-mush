import { Container } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from 'react-router-dom';
import './app.css';

import { MainRoutes, ShopRoutes } from './routing';

import { UserProvider } from './features/authentication/user-context';
import { BasketProvider } from './features/shop';
import { BottomNavBar, theme } from './features/ui';
import { NavBar, NavBarVariation } from './features/ui/nav-bar/nav-bar';
import { inShop } from './routing/routing-path-helpers';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BasketProvider>
          <NavBar variation={inShop() ? NavBarVariation.SHOP : NavBarVariation.MAIN} />
          <Container disableGutters maxWidth={false} sx={{ height: 'fit-content', minHeight: '100vh', overflow: 'hidden' }}>
            <BrowserRouter>
              {inShop() ? <ShopRoutes /> : <MainRoutes />}
            </BrowserRouter>
            <BottomNavBar />
          </Container>
        </BasketProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
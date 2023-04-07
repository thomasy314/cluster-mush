
import { AppBar, Toolbar } from '@mui/material';
import './NavBar.css';

const NavBar = () => {
    return (
        <AppBar id="navBarContainer" style={{}} position='sticky'>
            <Toolbar>
                <a href='/'><img alt="Logo" class="navBarItem" src="/logos/logo.svg" /></a>
                <a href="/shiitake"><button class="navBarButton navBarItem">Shiitake</button></a>
                {false &&<a href="/about"><button class="navBarButton navBarItem">About</button></a>}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
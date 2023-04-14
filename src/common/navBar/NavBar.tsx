
import { AppBar, Toolbar } from '@mui/material';
import './NavBar.css';

const NavBar = () => {
    return (
        <AppBar id="navBarContainer" style={{}} position='sticky'>
            <Toolbar>
                <a href='/'><img alt="Logo" className="navBarItem" src="/logos/logo.svg" /></a>
                <a href="/shiitake"><button className="navBarButton navBarItem">Shiitake</button></a>
                {false &&<a href="/about"><button className="navBarButton navBarItem">About</button></a>}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
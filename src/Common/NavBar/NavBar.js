
import { Height, Menu } from '@mui/icons-material';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    const styleTest = {
        position: 'sticky',
        top: 0,
        overflow: 'hidden',
        backgroundColor: 'white',
        height: "20vh"
    }

    const linkStyle = {
        textDecoration: "none",
        height: "100%"
    }

    const buttonStyle = {
        height: "100%",
    }

    return (
        <AppBar id="navBarContainer" style={{boxShadow: "0px 0px", backgroundColor: "white"}} position='sticky'>
            <Toolbar>
                <a href='/'><img class="navBarItem" src="/logos/logo.svg" /></a>
                <a href="/shiitake"><button class="navBarButton navBarItem">Shiitake</button></a>
                <a href="/about"><button class="navBarButton navBarItem">About</button></a>
            </Toolbar>
        </AppBar>
    )

    /*
                <a href='/shiitake' style={linkStyle}><button class="navbarbutton" variant='none'>mushies</button></a>
                <a href='/about' style={linkstyle}><button style={buttonStyle} variant='none'>About</Button></a>

            <a style={linkStyle} href='/shiitake'><Button style={buttonStyle} variant='outline'>Shiitake</Button></a>
            <a style={linkStyle} href='/about'><Button style={buttonStyle} variant='outline'>About</Button></a>
            */

}

export default NavBar;
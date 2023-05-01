import { AppBar, Toolbar } from '@mui/material';
import { MainNavBarContents } from './main-nav-bar-contents';
import { NavBarLink } from './nav-bar-link';
import { ShopNavBarContents } from './shop-nav-bar-contents';

import './nav-bar.css';

export enum NavBarVariation {
    MAIN = 'main',
    SHOP = 'shop'
}

type NavBarProps = {
    variation: NavBarVariation
}

export const NavBar = (props: NavBarProps) => {

    const navBarLookup = {
        [NavBarVariation.MAIN]: <MainNavBarContents />,
        [NavBarVariation.SHOP]: <ShopNavBarContents />
    }

    // TODO: Replace with unstyled menu
    return (
        <>
            <AppBar id="navBarContainer" position='sticky'>
                <Toolbar>
                    <NavBarLink path='/'><img alt="Logo" className="navBarItem" src="/logos/logo.svg" /></NavBarLink>
                    <>
                        {navBarLookup[props.variation]}
                    </>
                </Toolbar>
            </AppBar>
        </>
    )
}
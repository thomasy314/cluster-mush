
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Drawer, Theme, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { MainNavBarContents } from './main-nav-bar-contents';
import { ShopNavBarContents } from './shop-nav-bar-contents';

import './nav-bar.css';
import { NavBarLink } from './nav-bar-link';
import { useState } from 'react';

export enum NavBarVariation {
    MAIN = 'main',
    SHOP = 'shop'
}

type NavBarProps = {
    variation: NavBarVariation
}

export const NavBar = (props: NavBarProps) => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const theme: Theme = useTheme();
    const lessThanMd: boolean = useMediaQuery(theme.breakpoints.down('md'));

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
                    {
                        NavBarVariation.MAIN ?
                            <>
                                <div style={{flexGrow:1}}></div>
                                <button className="navBarItem navBarButton" onClick={() => setDrawerOpen(true)}><MenuIcon /></button>
                                <Drawer
                                    anchor='right'
                                    open={drawerOpen}
                                    onClose={() => setDrawerOpen(false)}
                                >
                                    <div id='navBarDrawer'>
                                        <h2>Mushrooms</h2>
                                        {navBarLookup[props.variation]}
                                    </div>
                                </Drawer>
                            </>
                            :
                            <>
                                {navBarLookup[props.variation]}
                            </>
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}
import { AppBar, Toolbar } from '@mui/material';
import { MainNavBarContents } from './main-nav-bar-contents';
import { NavBarLink } from './nav-bar-link';
import { ShopNavBarContents } from './shop-nav-bar-contents';

import './nav-bar.css';
import { NavBarMessageBanner, ShopMessages } from './nav-bar-message-banner';
import React from 'react';

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

    return (
        <>
            {props.variation === NavBarVariation.SHOP && <NavBarMessageBanner message={ShopMessages.BULK_DISCOUNT} />}
            <AppBar elevation={0} id="navBarContainer">
                <Toolbar>
                    <NavBarLink path='/'><img alt="Logo" className="navBarItem" src="/logos/logo.svg" /></NavBarLink>
                    {navBarLookup[props.variation]}
                </Toolbar>
            </AppBar>
        </>
    )
}
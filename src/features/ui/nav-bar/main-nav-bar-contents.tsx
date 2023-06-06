import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import { useState } from 'react';
import { mushroomInfoPageList } from "../../../pages/mushroom-info-page";
import { MainPagePaths } from '../../../routing';
import { completeShopUrl } from "../../../routing/routing-path-helpers";
import { Dropdown } from './nav-bar-dropdown';
import { NavBarLink } from "./nav-bar-link";

export const MainNavBarContents = () => {

    const theme: Theme = useTheme();
    const lessThanMd: boolean = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const [mushroomDropdownImage, setMushroomDropdownImage] = useState<string>(mushroomInfoPageList[0].images[0]);

    const mushroomSidebarLinks =
        mushroomInfoPageList.map(infoPage =>
            <NavBarLink key={infoPage.name} path={`/${infoPage.getCommonNamePath()}`}>{infoPage.name}</NavBarLink>
        );

    const mushroomDropdownLinks = (
        <Grid container maxHeight='50vh' overflow='hidden'>
            <Grid item xs={6}>
                {mushroomInfoPageList.map(infoPage => {
                    return (
                        <div key={`${infoPage.name}-nav-view`} onMouseEnter={() => setMushroomDropdownImage(infoPage.images[0])}>
                            <NavBarLink path={`/${infoPage.getCommonNamePath()}`}>{infoPage.name}</NavBarLink>
                        </div>
                    )
                })}
            </Grid>
            <Grid item xs={6}>
                <img alt='selection mushroom' style={{ aspectRatio: '1/1', maxHeight: '50vh', objectFit: 'cover' }} src={mushroomDropdownImage} />
            </Grid>
        </Grid>
    )

    return (
        <>
            {lessThanMd ?
                <>
                    <div style={{ flexGrow: 1 }}></div>
                    <button className="navBarItem navBarButton" onClick={() => setDrawerOpen(true)}><MenuIcon /></button>
                    <Drawer
                        anchor='right'
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        <div className='navBarDrawer'>
                            <h2 className="navBarDrawerTitle">Mushrooms</h2>
                            {mushroomSidebarLinks}
                            <hr className="navBarDrawerDivider" />
                            <NavBarLink path={MainPagePaths.ABOUT}>About Cluster Mush</NavBarLink>
                            <NavBarLink path={MainPagePaths.CONTACT}>Contact</NavBarLink>
                            {false && <NavBarLink path={completeShopUrl}>Shop</NavBarLink>}
                        </div>
                    </Drawer>
                </>
                :
                <>
                    <Dropdown buttonLink={MainPagePaths.BROWSE_GOURMET_MUSHROOMS} buttonText='Gourmet Mushrooms'>
                        {mushroomDropdownLinks}
                    </Dropdown>
                    <NavBarLink underlineOnHover path={MainPagePaths.ABOUT}>About</NavBarLink>
                    <NavBarLink underlineOnHover path={MainPagePaths.CONTACT}>Contact</NavBarLink>
                    <div style={{ flexGrow: 1 }}></div>
                    {false && <NavBarLink underlineOnHover path={completeShopUrl}>Shop</NavBarLink>}
                </>
            }
        </>
    )
};
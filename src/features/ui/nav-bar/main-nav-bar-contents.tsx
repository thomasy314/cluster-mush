import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import { useState } from 'react';
import { mushroomInfoPageList } from "../../../pages/mushroom-info-page";
import { Dropdown } from './nav-bar-dropdown';
import { NavBarLink } from "./nav-bar-link";

export const MainNavBarContents = () => {

    const theme: Theme = useTheme();
    const lessThanMd: boolean = useMediaQuery(theme.breakpoints.down('md'));

    const [mushroomDropdownImage, setMushroomDropdownImage] = useState<string>(mushroomInfoPageList[0].images[0]);

    const mushroomLinks = (
        <Grid container maxHeight='50vh' overflow='hidden'>
            <Grid item xs={6}>
                {mushroomInfoPageList.map(infoPage => {
                    return (
                        <div onMouseEnter={() => setMushroomDropdownImage(infoPage.images[0])}>
                            <Grid container key={`div-${infoPage.name}`}>
                                <Grid item>
                                    <NavBarLink key={infoPage.name} path={`/${infoPage.getPath()}`}>{infoPage.name}</NavBarLink>
                                    {!lessThanMd && <br key={`br-${infoPage.name}`} />}
                                </Grid>
                            </Grid>
                        </div>
                    )
                })}
            </Grid>
            <Grid item xs={6}>
                <img alt='selection mushroom' style={{ aspectRatio: '1/1', maxHeight: '50vh', objectFit: 'cover' }} src={mushroomDropdownImage} />
            </Grid>
        </Grid>
    )



    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

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
                        <div id='navBarDrawer'>
                            <h2 className="navBarDrawerTitle">Mushrooms</h2>
                            {mushroomLinks}
                            <hr className="navBarDrawerDivider" />
                            <NavBarLink path={'/about'}>About Cluster Mush</NavBarLink>
                        </div>
                    </Drawer>
                </>
                :
                <>
                    <Dropdown buttonText='Gourmet Mushrooms'>
                        {mushroomLinks}
                    </Dropdown>
                    <NavBarLink underlineOnHover={true} path={'/about'}>About</NavBarLink>
                </>
            }
        </>
    )
};
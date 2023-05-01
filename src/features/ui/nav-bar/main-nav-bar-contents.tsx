import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Theme, useMediaQuery, useTheme } from "@mui/material";
import { useState } from 'react';
import { mushroomInfoPageList } from "../../../pages/mushroom-info-page";
import { Dropdown } from './nav-bar-dropdown';
import { NavBarLink } from "./nav-bar-link";

export const MainNavBarContents = () => {

    const theme: Theme = useTheme();
    const lessThanMd: boolean = useMediaQuery(theme.breakpoints.down('md'));

    const mushroomLinks = mushroomInfoPageList.map(infoPage => {
        return (
            <div key={`div-${infoPage.name}`}>
                <NavBarLink key={infoPage.name} path={`/${infoPage.getPath()}`}>{infoPage.name}</NavBarLink>
                {!lessThanMd && <br key={`br-${infoPage.name}`} />}
            </div>
        )
    });

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
                    <NavBarLink path={'/about'}>About</NavBarLink>
                </>
            }
        </>
    )
};
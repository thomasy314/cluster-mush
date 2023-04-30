
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";
import { mushroomInfoPageList } from "../../../pages/mushroom-info-page";
import { NavBarLink } from "./nav-bar-link";
import { useState } from 'react';

export const MainNavBarContents = () => {

    const mushroomLinks = mushroomInfoPageList.map(infoPage => {
        return (
            <NavBarLink key={infoPage.name} path={`/${infoPage.getPath()}`}>{infoPage.name}</NavBarLink>
        )
    });

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    return (
        <>


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
        </>
    )
};
import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Drawer, Theme, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { BasketContext } from "../../shop";
import { NavBarLink } from "./nav-bar-link";

import MenuIcon from '@mui/icons-material/Menu';

export const ShopNavBarContents = () => {

    const theme: Theme = useTheme();
    const lessThanMd: boolean = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const basket = useContext(BasketContext);

    return (
        <>
            {
                lessThanMd ?
                    <>
                        <div style={{ flexGrow: 1 }}></div>
                        <NavBarLink path='/account'><PersonOutline /></NavBarLink>
                        <Badge badgeContent={basket.getTotalProductCount()} color="secondary" overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                            <NavBarLink path='/basket'><ShoppingCartOutlined /></NavBarLink>
                        </Badge>
                        <button className="navBarItem navBarButton" onClick={() => setDrawerOpen(true)}><MenuIcon /></button>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                        >
                            <div className="navBarDrawer">
                                <h2 className="navBarDrawerTitle">Cluster Shop</h2>
                                <NavBarLink path='/'>Home</NavBarLink>
                                <NavBarLink path='/contact'>Contact</NavBarLink>
                            </div>
                        </Drawer>
                    </>
                    :
                    <>
                        <NavBarLink path='/' underlineOnHover>Shop</NavBarLink>
                        <NavBarLink path='/contact' underlineOnHover>Contact</NavBarLink>
                        <div style={{ flexGrow: 1 }}></div>
                        <NavBarLink path='/account'><PersonOutline /></NavBarLink>
                        <Badge badgeContent={basket.getTotalProductCount()} color="secondary" overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                            <NavBarLink path='/basket'><ShoppingCartOutlined /></NavBarLink>
                        </Badge>
                    </>
            }
        </>
    )
}
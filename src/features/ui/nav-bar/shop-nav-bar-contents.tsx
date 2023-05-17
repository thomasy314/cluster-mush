import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import { NavBarLink } from "./nav-bar-link";
import { useContext } from "react";
import { BasketContext } from "../../shop";
import { Badge } from "@mui/material";

export const ShopNavBarContents = () => {

    const basket = useContext(BasketContext);

    return (
        <>
            <NavBarLink path='/' underlineOnHover>Shop</NavBarLink>
            <NavBarLink path='/contact' underlineOnHover>Contact</NavBarLink>
            <div style={{ flexGrow: 1 }}></div>
            <NavBarLink path='/account'><PersonOutline /></NavBarLink>
            <Badge badgeContent={basket.getTotalProductCount()} color="secondary" overlap="circular" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                <NavBarLink path='/basket'><ShoppingCartOutlined /></NavBarLink>
            </Badge>
        </>
    )
}
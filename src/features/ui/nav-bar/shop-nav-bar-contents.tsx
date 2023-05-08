import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import { NavBarLink } from "./nav-bar-link";

export const ShopNavBarContents = () => {

    return (
        <>
            <div style={{ flexGrow: 1 }}></div>
            <NavBarLink path='/account'><PersonOutline /></NavBarLink>
            <NavBarLink path='/basket'><ShoppingCartOutlined /></NavBarLink>
        </>
    )
}
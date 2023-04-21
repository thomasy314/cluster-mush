import { ShoppingCartOutlined } from "@mui/icons-material";
import { NavBarLink } from "./nav-bar-link";

export const ShopNavBarContents = () => {

    /*const [shopItems, setShopItems] = useState<ShopItemInfo[]>([]);

    useEffect(() => {
        getAvaiableItems()
            .then(shopItems => {
                setShopItems(shopItems);
            });
    }, []);

    const menuItems = shopItems.map((sItem: ShopItemInfo) => {
        return {
            name: sItem.name,
            path: stringToPath(sItem.name)
        }
    })
     <Dropdown items={menuItems}>Gourmet Earrings</Dropdown> */

    return (
        <>
            <NavBarLink path='/basket'><ShoppingCartOutlined /></NavBarLink>
        </>
    )
}
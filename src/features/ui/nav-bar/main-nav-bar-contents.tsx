import { NavBarLink } from "./nav-bar-link";
import { mushroomInfoPageList } from "../../../pages/mushroom-info-page";

export const MainNavBarContents = () => {

    const test = mushroomInfoPageList.map(infoPage => {
        return (
            <NavBarLink key={infoPage.name} path={`/${infoPage.getPath()}`}>{infoPage.name}</NavBarLink>
        )
    })

    return (
        <>
            {test}
            {false && <a href="/about"><button className="navBarButton navBarItem">About</button></a>}
        </>
    )
};
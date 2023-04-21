import { PropsWithChildren } from "react"

type NavBarLinkProps = {
    path: string,
    onMouseEnter?: () => void
}

export const NavBarLink = (props: PropsWithChildren<NavBarLinkProps>) => {
    return (
        <a href={props.path} onMouseEnter={() => {
            if (props.onMouseEnter) props.onMouseEnter();
        }}>
            <button className="navBarButton navBarItem">{props.children}</button>
        </a>
    )
}
import { PropsWithChildren } from "react"

type NavBarLinkProps = {
    path: string,
    onMouseEnter?: () => void,
    underlineOnHover?: boolean
}

export const NavBarLink = (props: PropsWithChildren<NavBarLinkProps>) => {

    const formattedChildren = typeof props.children === 'string' ? <p>{props.children}</p> : props.children;

    return (
        <a href={props.path} onMouseEnter={() => {
            if (props.onMouseEnter) props.onMouseEnter();
        }}>
            <button className={`navBarButton navBarItem ${props.underlineOnHover && 'underlineOnHover'}`}>{formattedChildren}</button>
        </a>
    )
}
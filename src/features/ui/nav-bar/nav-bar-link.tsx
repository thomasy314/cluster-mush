import { Link } from "@mui/material";
import { PropsWithChildren } from "react"

type NavBarLinkProps = {
    path: string,
    onMouseEnter?: () => void,
    underlineOnHover?: boolean,
    textAlign?: 'left' | 'right' | 'center'
}

export const NavBarLink = (props: PropsWithChildren<NavBarLinkProps>) => {

    const formattedChildren = typeof props.children === 'string' ? <p>{props.children}</p> : props.children;

    const buttonStyle = {
        textAlign: props.textAlign ?? 'center',
    }

    return (
        <Link underline="none" href={props.path} onMouseEnter={() => {
            if (props.onMouseEnter) props.onMouseEnter();
        }}>
            <button style={buttonStyle} className={`navBarButton navBarItem ${props.underlineOnHover && 'underlineOnHover'}`}>{formattedChildren}</button>
        </Link>
    )
}
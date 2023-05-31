import { Link, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

import './nav-bar-dropdown.css';

type DropdownProps = {
    buttonText: string,
    buttonLink?: string
}

export const Dropdown = (props: PropsWithChildren<DropdownProps>) => {

    return (
        <div className="dropdown">
            {props.buttonLink ?
                <Link underline="none" href={props.buttonLink}><button className='navBarButton navBarItem dropbtn' >{props.buttonText}</button></Link>
                :
                <button className='navBarButton navBarItem dropbtn' >{props.buttonText}</button>
            }
            <Paper className="dropdown-content" >
                {props.children}
            </Paper>
        </div>
    )

};
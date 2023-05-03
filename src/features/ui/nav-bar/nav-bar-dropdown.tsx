import { Paper } from "@mui/material";
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
                <a href={props.buttonLink}><button className='navBarButton navBarItem dropbtn' >{props.buttonText}</button></a>
                :
                <button className='navBarButton navBarItem dropbtn' >{props.buttonText}</button>
            }
            <Paper className="dropdown-content" >
                {props.children}
            </Paper>
        </div>
    )

};
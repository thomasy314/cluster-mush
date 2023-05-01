import { Menu } from "@mui/material";
import { PropsWithChildren, useState } from "react";

import './nav-bar-dropdown.css';

type DropdownProps = {
    buttonText: string
}

export const Dropdown = (props: PropsWithChildren<DropdownProps>) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <button className='navBarButton navBarItem' onClick={handleClick}>{props.buttonText}</button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transitionDuration={0}
                elevation={1}
            >
                {props.children}
            </Menu>
        </div>
    )
};
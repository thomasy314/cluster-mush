import { PropsWithChildren } from "react";

import './nav-bar-dropdown.css';

type DropdownItem = {
    name: string,
    path: string
}

type DropdownProps = {
    items: DropdownItem[]
}

export const Dropdown = (props: PropsWithChildren<DropdownProps>) => {

    const menuItems = props.items.map(item => {
        return <a key={item.path} href={item.path} className="dropdownLink">{item.name}</a>
    });

    return (
        <div className="dropdown">
            <button className="navBarButton navBarItem">Dropdown</button>
            <div className="dropdown-content">
                {menuItems}
            </div>
        </div>
    )
};
import { Collapse, IconButton } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './collapse-card.css';

type CollapseCardProps = {
    title: string,
    boldTitle?: boolean
}

const CollapseCardDefaultProps = {
    boldTitle: true
}

const CollapseCard = (props: PropsWithChildren<CollapseCardProps>) => {

    const [isChecked, setIsChecked] = useState(false);

    const toggle = () => {
        const newVal = !isChecked;
        setIsChecked(newVal);
    }

    const titleStyle = {
        fontWeight: props.boldTitle ? "bold" : "normal",
    }

    return  (
        <>
            <div className='CollapseCard' onClick={toggle}>
                <p className='CollapseCardTitle' style={titleStyle}>{props.title}</p>
                <IconButton size='small'>
                    {isChecked && <KeyboardArrowDownIcon />}
                    {!isChecked && <KeyboardArrowRightIcon />}
                </IconButton>
            </div>
            <Collapse in={isChecked}>
                {props.children}
            </Collapse>
        </>
    )
}
CollapseCard.defaultProps = CollapseCardDefaultProps;

export { CollapseCard };
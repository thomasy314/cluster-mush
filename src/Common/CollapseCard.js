import { Collapse, IconButton } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './CollapseCard.css';

const CollapseCard = ({children, title, boldTitle=true}) => {

    const [isChecked, setIsChecked] = useState(false);

    const toggle = () => {
        const newVal = !isChecked;
        setIsChecked(newVal);
    }

    const titleStyle = {
        fontWeight: boldTitle ? "bold" : "normal",
        display: "inline-block"
    }

    return  (
        <>
            <p id='CollapseCardTitle' onClick={toggle}>
                <p style={titleStyle}>{title}</p>
                <IconButton size='small'>
                    {isChecked && <KeyboardArrowDownIcon />}
                    {!isChecked && <KeyboardArrowRightIcon />}
                </IconButton>
            </p>
            <Collapse in={isChecked}>
                {children}
            </Collapse>
        </>
    )
}

export default CollapseCard;
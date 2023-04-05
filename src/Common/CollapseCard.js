import { Collapse, IconButton } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './CollapseCard.css';

const CollapseCard = ({children, title, collapseContent}) => {

    const [isChecked, setIsChecked] = useState(false);

    const toggle = () => {
        const newVal = !isChecked;
        setIsChecked(newVal);
    }

    return  (
        <>
            <p id='CollapseCardTitle' onClick={toggle}>
                <b>{title}</b>
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
import { Collapse, IconButton } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CollapseCard = ({children, title, collapseContent}) => {

    const [isChecked, setIsChecked] = useState(false);

    return  (
        <>
            <p>
                <b>{title}</b>
                <IconButton size='small' onClick={() => setIsChecked(!isChecked)}>
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
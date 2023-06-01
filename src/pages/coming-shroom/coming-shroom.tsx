import { Container, useTheme } from '@mui/material';

import { SocialIcons } from '../../features/social-media';
import Logo from '../../assets/logo';
import './coming-shroom.css';

const ComingShroom = () => {

    const theme = useTheme();

    return (
        <Container id="ComingShroomContainer">
            <div className='App-logo'>
                <Logo color={theme.palette.secondary.main} />
            </div>
            <h1>Coming Shroom</h1>
            <p>Funki fungi to increase appreciation and understanding of our mushroom friends. Follow the Cluster Mush instagram for future updates!</p>
            <SocialIcons />
        </Container>
    )
}

export default ComingShroom;
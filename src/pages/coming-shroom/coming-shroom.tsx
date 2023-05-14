import { Container } from '@mui/material';

import { SocialIcons } from '../../features/social-media';
import './coming-shroom.css';

const ComingShroom = () => {

    return (
        <Container id="ComingShroomContainer">
            <img src="/logos/logo.svg" className="App-logo" alt="logo" />
            <h1>Coming Shroom</h1>
            <p>Funki fungi to increase appreciation and understanding of our mushroom friends. Follow the Cluster Mush instagram for future updates!</p>
            <SocialIcons />
        </Container>
    )
}

export default ComingShroom;
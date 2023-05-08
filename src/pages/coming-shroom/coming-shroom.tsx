import { Button, Container } from '@mui/material';

import './coming-shroom.css';
import { SocialIcons } from '../../features/social-media';

const ComingShroom = () => {

    return (
        <Container id="ComingShroomContainer">
            <img src="/logos/logo.svg" className="App-logo" alt="logo" />
            <h1 id="ComingShroomh1">Coming Shroom</h1>
            {false && <a href="/gourmet-mushrooms"><Button>Learn</Button></a>}
            {false && <a href="/about"><Button>About</Button></a>}
            {false && <a href="https://shop.clustermush.com"><Button>Shop</Button></a>}
            <p>Funki fungi to increase appreciation and understanding of our mushroom friends. Follow the Cluster Mush instagram for future updates!</p>
            <SocialIcons />
        </Container>
    )
}

export default ComingShroom;
import './ComingShroom.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import { Container } from '@mui/material';

const ComingShroom = () => {

    const instagramLink = 'https://www.instagram.com/clustermush/';

    return (
        <Container id="ComingShroomContainer">
            <img src="/logos/logo.svg" className="App-logo" alt="logo" />
            <h1 id="ComingShroomh1">Coming Shroom</h1>
            <p>Funki fungi to increase appreciation and understanding of our mushroom friends. Follow the Cluster Mush instagram for future updates!</p>
            <a href={instagramLink}><InstagramIcon fontSize='large'/></a>
        </Container>
    )
}

export default ComingShroom;
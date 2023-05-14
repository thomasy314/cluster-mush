
import { Button, Container, Link } from '@mui/material';

import { SocialIcons } from '../../features/social-media';
import './home.css';

export const Home = () => {

    const homeButtonStyle = {
        margin: '10px',
        height: '40px'
    }

    return (
        <Container id="HomeContainer">
            <img src="/logos/logo.svg" className="App-logo" alt="logo" />
            <div style={{ display: 'flex' }}>
                {<Link href="/gourmet-mushrooms"><Button variant='outlined' style={homeButtonStyle}>Learn</Button></Link>}
                {<Link href="https://shop.clustermush.com" ><Button variant='outlined' style={homeButtonStyle}>Shop</Button></Link>}
                {<Link href="/about" ><Button variant='outlined' style={homeButtonStyle}>About</Button></Link>}
            </div>
            <p>Funki fungi to increase appreciation and understanding of our mushroom friends. Follow the Cluster Mush instagram for future updates!</p>
            <SocialIcons />
        </Container>
    )
}
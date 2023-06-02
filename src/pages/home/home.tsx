
import { Button, Container, Link, useTheme } from '@mui/material';

import { SocialIcons } from '../../features/social-media';
import './home.css';
import Logo from '../../assets/logo';
import { completeShopUrl } from '../../routing/routing-path-helpers';

export const Home = () => {

    const theme = useTheme();

    const homeButtonStyle = {
        margin: '10px',
        height: '40px',
        color: theme.palette.primary.light
    }

    return (
        <Container id="HomeContainer">
            <div className='App-logo'>
                <Logo color={theme.palette.secondary.main} />
            </div>
            <div style={{ display: 'flex' }}>
                {<Link href="/gourmet-mushrooms"><Button disableElevation style={homeButtonStyle}>Learn</Button></Link>}
                {<Link href={completeShopUrl} ><Button disableElevation style={homeButtonStyle}>Shop</Button></Link>}
                {<Link href="/about" ><Button disableElevation style={homeButtonStyle}>About</Button></Link>}
            </div>
            <p>Funki fungi to promote appreciation and understanding of our mushroom friends</p>
            <SocialIcons />
        </Container>
    )
}
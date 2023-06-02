import { Container, Grid, Link, useTheme } from "@mui/material";

import Logo from '../../../assets/logo';
import { completeMainUrl, completeShopUrl } from "../../../routing/routing-path-helpers";
import { SocialIcons } from "../../social-media";

import './bottom-nav-bar.css';

export const BottomNavBar = () => {

    const theme = useTheme();

    return (
        <footer>

            <Container maxWidth={false} sx={{ backgroundColor: 'secondary.main', paddingBottom: '3vh', paddingTop: '3vh' }}>
                <Grid justifyContent='center' textAlign='center' container>
                    <Grid item xs={12} md={4} display='flex' justifyContent='center' alignItems='center'>
                        <div style={{ height: '200px' }}>
                            <Link href={completeMainUrl}>
                                <Logo color={theme.palette.primary.light} />
                            </Link>
                            <Link color='primary.light' underline="hover" href={completeMainUrl} sx={{ padding: '.5rem' }}>Main Website</Link>
                            {false && <Link color='primary.light' underline="hover" href={completeShopUrl} sx={{ padding: '.5rem' }}>Shop</Link>}
                        </div>
                        <br />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h2 style={{ color: theme.palette.primary.light }}>Information</h2>
                        <Link className="bottomNavBarInfoLink" href={`${completeMainUrl}/about`} color='primary.light'>About Cluster Mush</Link>
                        <Link className="bottomNavBarInfoLink" href={`${completeShopUrl}/shop-faq`} color='primary.light'>Shop FAQ</Link>
                        <Link className="bottomNavBarInfoLink" href="/terms-of-use" color='primary.light'>Terms of Use</Link>
                        <Link className="bottomNavBarInfoLink" href="/privacy-policy" color='primary.light'>Privacy Policy</Link>
                        <Link className="bottomNavBarInfoLink" href="/return-policy" color='primary.light'>Return Policy</Link>
                        <Link className="bottomNavBarInfoLink" href="/shipping-policy" color='primary.light'>Shipping Policy</Link>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign='center' justifyContent='center'>
                        <h2 style={{ color: theme.palette.primary.light }}>Communication</h2>
                        <br />
                        <SocialIcons color='primary.light' fontSize={1.5} />
                    </Grid>
                </Grid>
            </Container >
        </footer>
    )
}
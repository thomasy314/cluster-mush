

import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import './FullSplitPage.css';


const FullSplitPage = ({children, titleComponent, imageSrc}) => {

    const theme = useTheme();
    const moreOrEqualToMd = useMediaQuery(theme.breakpoints.up('md'));
    const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

    const FullSplitPageStyle = {
        height: moreOrEqualToMd ? '100vh' : '90vh',
        width: moreOrEqualToMd ? '50vw' : '100vw',
        position: lessThanMd ? 'static' : 'fixed'
    }

    return (
        <Container disableGutters maxWidth={false} id='FullSplitPageContainer'>
            <Container id='FullSplitPageTitle'>
                {lessThanMd && titleComponent}
            </Container>
            <Grid container spacing={2}>
                {moreOrEqualToMd && <Grid item sm={6}>
                    <Container>
                        {titleComponent}
                        {children}
                    </Container>
                </Grid>}
                <Grid item sm={12} md={6} style={{paddingTop:0}}>
                    <img id='FullSplitPageImage' style={FullSplitPageStyle} alt="thing" src={imageSrc} />
                </Grid>
                {lessThanMd && <Grid item sm={12}>
                    <Container>
                        {children}
                    </Container>
                </Grid>}
            </Grid>
        </Container>
    )
}

export default FullSplitPage;
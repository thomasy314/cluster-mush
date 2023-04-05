

import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import './FullSplitPage.css';


const FullSplitPage = ({children, titleComponent, imageSrc, smallImage}) => {

    const theme = useTheme();
    const moreOrEqualToMd = useMediaQuery(theme.breakpoints.up('md'));
    const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

    const smallImageBorderSize = 10;

    const height = (moreOrEqualToMd ? 100 : 90) - (smallImage ? smallImageBorderSize*2 : 0);
    const width = (moreOrEqualToMd ? 50 : 100) - (smallImage ? smallImageBorderSize*2 : 0);

    const containerStyle = {
        padding: smallImage ? '10vh' : 0
    }

    const FullSplitPageImageStyle = {
        height: `${height}vh`,
        width: `${width}vw`,
        position: lessThanMd ? 'static' : 'fixed',
    }

    return (
        <Container disableGutters maxWidth={false} style={containerStyle} id='FullSplitPageContainer'>
            <Container id='FullSplitPageTitle'>
                {lessThanMd && titleComponent}
            </Container>
            <Grid container spacing={2}>
                {moreOrEqualToMd && <Grid item xs={6}>
                    <Container>
                        {titleComponent}
                        {children}
                    </Container>
                </Grid>}
                <Grid item xs={12} md={6} style={{paddingTop:0}}>
                    <img id='FullSplitPageImage' style={FullSplitPageImageStyle} alt="thing" src={imageSrc} />
                </Grid>
                {lessThanMd && <Grid item xs={12}>
                    <Container>
                        {children}
                    </Container>
                </Grid>}
            </Grid>
        </Container>
    )
}

export default FullSplitPage;
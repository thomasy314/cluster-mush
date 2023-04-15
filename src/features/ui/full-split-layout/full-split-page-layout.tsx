import { Theme } from '@mui/material';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { CSSProperties, PropsWithChildren } from 'react';
import './full-split-page-layout.css';

type FullSplitPageLayoutProps = {
    titleComponent: JSX.Element,
    imageSrc: string,
    smallImage?: boolean
}

const FullSplitPageLayoutDefaultProps = {
    smallImage: false
}

const FullSplitPageLayout = (props: PropsWithChildren<FullSplitPageLayoutProps>) => {

    const theme: Theme = useTheme();
    const moreOrEqualToMd: boolean = useMediaQuery(theme.breakpoints.up('md'));
    const lessThanMd: boolean = useMediaQuery(theme.breakpoints.down('md'));

    const smallImageBorderSize: number = 10;

    const height: number = lessThanMd ? 90 : (100 - (props.smallImage ? smallImageBorderSize*2 : 0));
    const width: number = lessThanMd ? 100 : (50 - (props.smallImage ? smallImageBorderSize*2 : 0));

    const containerStyle: CSSProperties = {
        paddingLeft: (props.smallImage && moreOrEqualToMd) ? '20vh' : 0,
        paddingTop: props.smallImage ? '5vh' : 0
    }

    const FullSplitPageImageStyle: CSSProperties = {
        height: `${height}vh`,
        width: `${width}vw`,
        position: lessThanMd ? 'static' : 'fixed',
    }

    return (
        <Container disableGutters maxWidth={false} style={containerStyle} id='FullSplitPageContainer'>
            {lessThanMd && <Container id='FullSplitPageTitle'>
                {props.titleComponent}
            </Container>}
            <Grid container spacing={2}>
                {moreOrEqualToMd && <Grid item xs={6}>
                    <Container>
                        {props.titleComponent}
                        {props.children}
                    </Container>
                </Grid>}
                <Grid item xs={12} md={6} >
                    <img id='FullSplitPageImage' style={FullSplitPageImageStyle} alt="thing" src={props.imageSrc} />
                </Grid>
                {lessThanMd && <Grid item xs={12}>
                    <Container>
                        {props.children}
                    </Container>
                </Grid>}
            </Grid>
        </Container>
    )
}
FullSplitPageLayout.defaultProps = FullSplitPageLayoutDefaultProps;

export default FullSplitPageLayout;
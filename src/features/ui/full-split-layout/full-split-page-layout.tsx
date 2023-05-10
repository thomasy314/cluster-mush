import { Container, Grid, Theme, useMediaQuery, useTheme } from '@mui/material';
import { CSSProperties, PropsWithChildren } from 'react';
import { LoadingPage } from '../loading/loading-page/loading-page';
import './full-split-page-layout.css';

type FullSplitPageLayoutProps = {
    titleComponent: JSX.Element,
    imageSrc: string,
    smallImage?: boolean,
    loading?: boolean | undefined
}

const FullSplitPageLayoutDefaultProps = {
    smallImage: false
}

const FullSplitPageLayout = (props: PropsWithChildren<FullSplitPageLayoutProps>) => {

    const theme: Theme = useTheme();
    const lessThanMd: boolean = useMediaQuery(theme.breakpoints.down('md'));

    const smallImageBorderSize: number = 10;

    const containerStyle: CSSProperties = {
        paddingLeft: (props.smallImage && !lessThanMd) ? '20vh' : 0,
        paddingTop: props.smallImage ? '5vh' : 0,
    }

    const height: number = lessThanMd ? 90 : (100 - (props.smallImage ? smallImageBorderSize * 2 : 0));
    const width: number = lessThanMd ? 100 - (props.smallImage ? 10 : 0) : (50 - (props.smallImage ? smallImageBorderSize * 2 : 0));

    const FullSplitPageImageStyle: CSSProperties = {
        height: `${height}vh`,
        width: `${width}vw`,
        maxWidth: '500px',
        maxHeight: '500px',
        position: lessThanMd ? 'static' : 'fixed',
        borderRadius: (props.smallImage) ? '25px': '0'
    }

    return (
        <>
            {
                (props.loading === undefined || props.loading === false) ?
                    <Container disableGutters maxWidth={false} style={containerStyle} id='FullSplitPageContainer'>
                        {lessThanMd && <Container id='FullSplitPageTitle'>
                            {props.titleComponent}
                        </Container>}
                        <Grid container spacing={2}>
                            {!lessThanMd && <Grid item xs={6}>
                                <Container>
                                    {props.titleComponent}
                                    {props.children}
                                </Container>
                            </Grid>}
                            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center'}} >
                                <img id='FullSplitPageImage' style={FullSplitPageImageStyle} alt="thing" src={props.imageSrc} />
                            </Grid>
                            {lessThanMd && <Grid item xs={12}>
                                <Container>
                                    {props.children}
                                </Container>
                            </Grid>}
                        </Grid>
                    </Container>
                    :
                    <LoadingPage />
            }
        </>
    )
}
FullSplitPageLayout.defaultProps = FullSplitPageLayoutDefaultProps;

export { FullSplitPageLayout };

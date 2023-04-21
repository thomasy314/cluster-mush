import { CircularProgress, Container } from '@mui/material';

import './loading-page.css';

export const LoadingPage = () => {

    return (
        <Container id='LoadingPageContainer'>
            <CircularProgress color='inherit' />
        </Container>
    )
}
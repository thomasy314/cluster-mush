
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import MushroomTitleName from './MushroomInfoPageParts/MushroomTitleName';
import './MushroomInfoPage.css';
import CollapseCard from '../Common/CollapseCard';

const formatList = (list) => {
    const ulItems = list.map((item, i) => <li key={i}>{item}</li>)
    return <ul>{ulItems}</ul>
}

const MushroomInfoPage = ({mushroomInfo}) => {

    const theme = useTheme();
    const moreOrEqualToMd = useMediaQuery(theme.breakpoints.up('md'));
    const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

    const testCss = {
    /*    minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'*/
    }


    const testDesc = 
    <>
        <p><b>Other Common Names</b>:</p> {formatList(mushroomInfo.commonNames)}
        <p><b>Etymology</b>: {mushroomInfo.etymology}</p>
        <p><b>Location</b>: {mushroomInfo.location}</p>
        <p><b>Ecological Group</b>: {mushroomInfo.ecologicalGroup}</p>
        <p><b>Edible?</b> {mushroomInfo.edible}</p>
        <CollapseCard title='History and Culture'>{formatList(mushroomInfo.historyAndCulture)}</CollapseCard>
        <CollapseCard title="Science">{formatList(mushroomInfo.science)}</CollapseCard>
        <CollapseCard title="Agriculture">{formatList(mushroomInfo.agriculture)}</CollapseCard>
    </>

    const styleThing = {
        height: moreOrEqualToMd ? '100vh' : '90vh',
        width: moreOrEqualToMd ? '50vw' : '100vw',
        objectFit:'cover'
    }

    return (
        <Container disableGutters maxWidth={false} style={{overflowX:'hidden'}}>
            <Container>
                {lessThanMd && <MushroomTitleName name={mushroomInfo.name} latinName={mushroomInfo.latinName} />}
            </Container>
            <Grid container spacing={2}>
                {moreOrEqualToMd && <Grid item style={testCss} sm={6}>
                    <Container>
                        <MushroomTitleName name={mushroomInfo.name} latinName={mushroomInfo.latinName} />
                        {testDesc}
                    </Container>
                </Grid>}
                <Grid item style={testCss} sm={12} md={6}>
                    <img style={styleThing} alt="Mushroom" src={mushroomInfo.images[0]} />
                </Grid>
                {lessThanMd && <Grid item style={testCss} sm={12}>
                    <Container>
                        {testDesc}
                    </Container>
                </Grid>}
            </Grid>
        </Container>
    )
}

export default MushroomInfoPage;

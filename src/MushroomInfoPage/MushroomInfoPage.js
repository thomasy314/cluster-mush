
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import MushroomTitleName from './MushroomInfoPageParts/MushroomTitleName';
import './MushroomInfoPage.css';
import CollapseCard from '../Common/CollapseCard';

const formatStringList = (list) => {
    const ulItems = list.map((item, i) => <li key={i}>{item}</li>)
    return <ul>{ulItems}</ul>
}

const formatValueWithReferenceList = (list, citationList) => {
    const ulItems = list.map((item, i) => {
        const value = item.value;
        return <li key={i}>{value}</li>
    });
    return <ul>{ulItems}</ul>
}

const formatCitationList = (list) => {
    const olItems = list.map((item, i) => {
        const citation = item.citation;
        const link = item.link;
        console.log(link)
        return <li key={i}><a href={link}>{citation}</a></li>
    });
    return <ol>{olItems}</ol>
}

const MushroomInfoPage = ({mushroomInfo}) => {

    const theme = useTheme();
    const moreOrEqualToMd = useMediaQuery(theme.breakpoints.up('md'));
    const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

    const mushroomInfoPageStyle = {
        height: moreOrEqualToMd ? '100vh' : '90vh',
        width: moreOrEqualToMd ? '50vw' : '100vw',
        position: lessThanMd ? 'static' : 'fixed'
    }

    const citations = mushroomInfo.getCitations();

    const description = 
    <>
        <p><b>Other Common Names</b>:</p> {formatStringList(mushroomInfo.commonNames)}
        <p><b>Etymology</b>: {mushroomInfo.etymology}</p>
        <p><b>Location</b>: {mushroomInfo.location}</p>
        <p><b>Ecological Group</b>: {mushroomInfo.ecologicalGroup}</p>
        <p><b>Edible?</b> {mushroomInfo.edible}</p>
        <CollapseCard title='History and Culture'>{formatValueWithReferenceList(mushroomInfo.historyAndCulture, citations)}</CollapseCard>
        <CollapseCard title="Science">{formatValueWithReferenceList(mushroomInfo.science, citations)}</CollapseCard>
        <CollapseCard title="Agriculture">{formatValueWithReferenceList(mushroomInfo.agriculture, citations)}</CollapseCard>
        <CollapseCard title="Learn More!">{formatCitationList(citations)}</CollapseCard>
    </>

    return (
        <Container disableGutters maxWidth={false} id='MushroomInfoPageContainer'>
            <Container style={{paddingBottom:'1rem'}}>
                {lessThanMd && <MushroomTitleName name={mushroomInfo.name} latinName={mushroomInfo.latinName} />}
            </Container>
            <Grid container spacing={2}>
                {moreOrEqualToMd && <Grid item sm={6}>
                    <Container>
                        <MushroomTitleName name={mushroomInfo.name} latinName={mushroomInfo.latinName} />
                        {description}
                    </Container>
                </Grid>}
                <Grid item sm={12} md={6} style={{paddingTop:0}}>
                    <img id='MushroomInfoPageImage' style={mushroomInfoPageStyle} alt="Mushroom" src={mushroomInfo.images[0]} />
                </Grid>
                {lessThanMd && <Grid item sm={12}>
                    <Container>
                        {description}
                    </Container>
                </Grid>}
            </Grid>
        </Container>
    )
}

export default MushroomInfoPage;


import MushroomTitleName from './MushroomInfoPageParts/MushroomTitleName';
import './MushroomInfoPage.css';
import CollapseCard from '../Common/CollapseCard';
import FullSplitPage from '../Common/FullSplitPage';

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
        return <li key={i}><a href={link}>{citation}</a></li>
    });
    return <ol>{olItems}</ol>
}

const MushroomInfoPage = ({mushroomInfo}) => {
    const citations = mushroomInfo.getCitations();

    const titleComponent = <MushroomTitleName name={mushroomInfo.name} latinName={mushroomInfo.latinName} />;

    return (
        <FullSplitPage titleComponent={titleComponent} imageSrc={mushroomInfo.images[0]}>
            <p><b>Other Common Names</b>:</p> {formatStringList(mushroomInfo.commonNames)}
            <p><b>Etymology</b>: {mushroomInfo.etymology}</p>
            <p><b>Location</b>: {mushroomInfo.location}</p>
            <p><b>Ecological Group</b>: {mushroomInfo.ecologicalGroup}</p>
            <p><b>Edible?</b> {mushroomInfo.edible}</p>
            <CollapseCard title='History and Culture'>{formatValueWithReferenceList(mushroomInfo.historyAndCulture, citations)}</CollapseCard>
            <CollapseCard title="Science">{formatValueWithReferenceList(mushroomInfo.science, citations)}</CollapseCard>
            <CollapseCard title="Agriculture">{formatValueWithReferenceList(mushroomInfo.agriculture, citations)}</CollapseCard>
            <CollapseCard title="Learn More!">{formatCitationList(citations)}</CollapseCard>
        </FullSplitPage>
    )
}

export default MushroomInfoPage;

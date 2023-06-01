
import MushroomTitleName from './mushroom-info-page-title';
import { CollapseCard, FullSplitPageLayout } from '../ui';
import { Citation, MushroomInfo, ValueWithCitation } from './data-objects';

import './mushroom-info-page.css';
import { Link } from '@mui/material';
import { stringToPath } from '../../routing/routing-path-helpers';

const formatStringList = (list: string[]) => {
    const ulItems = list.map((item, i) => <li key={i}>{item}</li>)
    return <ul>{ulItems}</ul>
}

const formatValueWithReferenceList = (list: ValueWithCitation<any>[], citationList: Citation[]) => {
    const ulItems = list.map((item, i) => {
        const value = item.value;
        return <li key={i}>{value}</li>
    });
    return <ul>{ulItems}</ul>
}

const formatCitationList = (list: Citation[]) => {
    const olItems = list.map((item, i) => {
        const citation = item.citation;
        const link = item.link;
        return <li key={i}><Link href={link.href}>{citation}</Link></li>
    });
    return <ol>{olItems}</ol>
}

type MushroomInfoPageProps = {
    mushroomInfo: MushroomInfo
}

const MushroomInfoPage = (props: MushroomInfoPageProps) => {
    const citations = props.mushroomInfo.getCitations();

    const titleComponent = <MushroomTitleName mushroomInfo={props.mushroomInfo}/>;

    return (
        <FullSplitPageLayout titleComponent={titleComponent} imageSrc={props.mushroomInfo.images[0]}>
            { false && <p>Find artwork related to this mushroom in <Link href={`http://shop.localhost:3000/?mushroom_name=${stringToPath(props.mushroomInfo.name)}`}>the Cluster Mush store!</Link></p> }
            <p><b>Other Common Names</b>:</p> {formatStringList(props.mushroomInfo.commonNames)}
            <p><b>Etymology</b>: {props.mushroomInfo.etymology}</p>
            <p><b>Location</b>: {props.mushroomInfo.location}</p>
            <p><b>Ecological Group</b>: {props.mushroomInfo.ecologicalGroup}</p>
            <p><b>Edible?</b> {props.mushroomInfo.edible}</p>
            {props.mushroomInfo.historyAndCulture.length > 0 && <CollapseCard title='History and Culture'>{formatValueWithReferenceList(props.mushroomInfo.historyAndCulture, citations)}</CollapseCard>}
            {props.mushroomInfo.science.length > 0 && <CollapseCard title="Science">{formatValueWithReferenceList(props.mushroomInfo.science, citations)}</CollapseCard>}
            {props.mushroomInfo.agriculture.length > 0 && <CollapseCard title="Agriculture">{formatValueWithReferenceList(props.mushroomInfo.agriculture, citations)}</CollapseCard>}
            <CollapseCard title="Learn More!">{formatCitationList(props.mushroomInfo.learnMore)}</CollapseCard>
            <CollapseCard title="References">{formatCitationList(citations)}</CollapseCard>
        </FullSplitPageLayout>
    )
}

export default MushroomInfoPage;

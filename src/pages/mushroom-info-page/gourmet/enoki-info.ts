import { 
    Citation,
    EcologicalGroup,
    MushroomInfo,
    ValueWithCitation
} from '../../../features/mushroom-info-page/data-objects';

import enokiPhoto from '../../../assets/photos/enoki/enoki.jpg';

const name: string = 'Enoki'

const latinName: string = 'Flammulina filiformis'

const commonNames: string[] = [
    '(China) 金針菇 (jīnzhēngū, "old needle mushroom)',
    '(China) 金菇 (jīngū, "Gold mushroom)',
    '(India) Futu',
    '(Korea) 팽이버섯 (Paengi Beoseot, "Mushroom planted near catalpa)',
    '(Vietnam) nấm kim châm ("Golden needle mushroom")',
    'Velvet foot',
    'Winter Mushroom'
];

const etymology: string = 'Enoki refers to the enoki tree, also called the chinese hackberry tree, that is is often found growing on.'

const location: string = 'Found in eastern and southern parts of asia with it being most popular in east asian countries like China, Japan, and Korea.'

const ecologicalGroup: EcologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible: string = 'Yes! When eaten raw, the mushroom has a crisp texture and peppery taste. It is common to see it added to soup to add more texture without an overpowering flavor.'

// Citations
const enokiMushroomBreeding: Citation = new Citation('Sharma, V. P., Barh, A., Bairwa, R., Annepu, S. K., Kumari, B., & Kamal, S. (2021). Enoki Mushroom (Flammulina velutipes (Curtis) Singer) Breeding. Springer EBooks, 423–441. https://doi.org/10.1007/978-3-030-66969-0_11', 'https://doi.org/10.1007/978-3-030-66969-0_11');
const phylogenyAndSpeciesDelimination: Citation = new Citation('Wang, P., Liu, X. B., Dai, Y., Horak, E., Steffen, K., & Yang, Z. L. (2018b). Phylogeny and species delimitation of Flammulina: taxonomic status of winter mushroom in East Asia and a new European species identified using an integrated approach. Mycological Progress, 17(9), 1013–1030. https://doi.org/10.1007/s11557-018-1409-2', 'https://doi.org/10.1007/s11557-018-1409-2');
const theTwoEnoki: Citation = new Citation('Jenny. (2022). The Two Enoki Mushrooms: Foraging, Identification, and Cultivation - Mushroom Appreciation. Mushroom Appreciation. https://www.mushroom-appreciation.com/the-two-enoki-mushrooms.html', 'https://www.mushroom-appreciation.com/the-two-enoki-mushrooms.html')
const enokiHarvestVideo: Citation = new Citation('Southwest Mushrooms. (2021, February 22). Golden Enoki Mushroom Harvest | Southwest Mushrooms [Video]. YouTube. https://www.youtube.com/watch?v=Ozsp9SS6-tg', 'https://www.youtube.com/watch?v=Ozsp9SS6-tg')
const mushOfTheMonthEnoki: Citation = new Citation('Volk, T. (n.d.).Flammulina velutipes, aka winter mushroom, velvet stem, velvet foot, enoki, enokitake, Tom Volk’s Fungus of the Month for March 1997. (n.d.). https://botit.botany.wisc.edu/toms_fungi/march97.html', 'https://botit.botany.wisc.edu/toms_fungi/march97.html')

const historyAndCultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Records show Enoki being first cultivated in China as far back as the 8th century.', [enokiMushroomBreeding])
];

const scienceFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Up until 2018, Flammulina filiformis was considered to be the same species as its european and north american counter part Flammulina velutipes ', [phylogenyAndSpeciesDelimination])
];

const agricultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Enoki found in the wild versus those cultivated vary wildly in appearance. Cultivated Enoki are tall, with very small caps, and yellowish white whereas wild Enoki are short, have wide caps, and have an orange coloration. This difference is caused by methods used in cultivation and from genetics. When cultivated Enoki, they are given less oxygen and light leading to them elongating and whitening.', [theTwoEnoki, enokiHarvestVideo, enokiMushroomBreeding]),
    new ValueWithCitation('Can be found during the winter months when other mushrooms would not grow. This is because Enoki fruiting can be triggered by a cold shock.', [enokiHarvestVideo, mushOfTheMonthEnoki])
];

const learnMore: Citation[] = [
    new Citation('Enoki Wikipedia', 'https://en.wikipedia.org/wiki/Flammulina_filiformis'),
    new Citation('Mushroom Appreciation', 'https://www.mushroom-appreciation.com/the-two-enoki-mushrooms.html'),
    new Citation('(video) Goden Enoki Mushroom Harvest | Southwest Mushrooms', 'https://www.youtube.com/watch?v=Ozsp9SS6-tg'),
    new Citation('Tom Volk\'s Fungus of the Month: Enoki', 'https://botit.botany.wisc.edu/toms_fungi/march97.html'),
    new Citation('Wild About Mushrooms Cookbook: Enoki', 'https://www.mssf.org/cookbook/enoki.html')
];


export const EnokiInfo: MushroomInfo = new MushroomInfo(
    name,
    [enokiPhoto],
    latinName,
    commonNames,
    etymology,
    location,
    ecologicalGroup,
    edible,
    historyAndCultureFacts,
    scienceFacts,
    agricultureFacts,
    learnMore
);
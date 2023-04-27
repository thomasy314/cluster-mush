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

const etymology: string = 'Enoki refers to the Enoki tree or Chinese hackberry tree that it is often found growing on.';

const location: string = 'Found in eastern and southern parts of Asia with it being most popular in East Asian countries like China, Japan, and Korea.';

const ecologicalGroup: EcologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible: string = 'Yes! The mushroom has a crisp texture and peppery taste when eaten raw. It is very popular in soup as it lends a great texture without an overpowering flavor.';

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
    new ValueWithCitation('Up until 2018, The Enoki was considered to be the same species as its European and North American counterpart: Flammulina velutipes also referred to as the Velvet Foot.', [phylogenyAndSpeciesDelimination])
];

const agricultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Cultivated Enoki vary wildly in appearance from those found in nature. Cultivated Enoki are tall, with very small caps, and are white with an orange/yellow tint. Wild Enoki are short, have wide caps, and have a bright orange coloration. This difference is caused by genetics and a decrease in oxygen and light during cultivation, leading to elongation and whitening', [theTwoEnoki, enokiHarvestVideo, enokiMushroomBreeding]),
    new ValueWithCitation('A decrease in temperature is one of the triggers that tell Enoki to start fruiting (aka growing mushrooms). Because of this, Enoki can be found during the winter months when it is too cold for other mushrooms to grow.', [enokiHarvestVideo, mushOfTheMonthEnoki])
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
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
    '(China) 金針菇 (jīnzhēngū, "Old Needle mushroom)',
    '(China) 金菇 (jīngū, "Gold mushroom)',
    '(India) Futu',
    '(Korea) 팽이버섯 (Paengi Beoseot, "mushroom planted near catalpa")',
    '(Vietnam) nấm kim châm ("Golden Needle mushroom")',
    'Velvet Foot',
    'Winter mushroom',
    'See You Tomorrow mushroom'
];

const etymology: string = 'The word "Enoki" refers to the Enoki tree, or Chinese Hackberry tree, that is often found growing on.';

const location: string = 'Found in eastern and southern parts of Asia with it being most popular in East Asian countries like China, Japan, and Korea.';

const ecologicalGroup: EcologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible: string = 'Yes! This mushroom boasts a crisp texture and a subtle peppery taste. It is highly favored in soups for its ability to enhance the overall texture without overwhelming the flavors.';

// Citations
const enokiMushroomBreeding: Citation = new Citation('Sharma, V. P., Barh, A., Bairwa, R., Annepu, S. K., Kumari, B., & Kamal, S. (2021). Enoki Mushroom (Flammulina velutipes (Curtis) Singer) Breeding. Springer EBooks, 423–441. https://doi.org/10.1007/978-3-030-66969-0_11', 'https://doi.org/10.1007/978-3-030-66969-0_11');
const phylogenyAndSpeciesDelimination: Citation = new Citation('Wang, P., Liu, X. B., Dai, Y., Horak, E., Steffen, K., & Yang, Z. L. (2018b). Phylogeny and species delimitation of Flammulina: taxonomic status of winter mushroom in East Asia and a new European species identified using an integrated approach. Mycological Progress, 17(9), 1013–1030. https://doi.org/10.1007/s11557-018-1409-2', 'https://doi.org/10.1007/s11557-018-1409-2');
const theTwoEnoki: Citation = new Citation('Jenny. (2022). The Two Enoki Mushrooms: Foraging, Identification, and Cultivation - Mushroom Appreciation. Mushroom Appreciation. https://www.mushroom-appreciation.com/the-two-enoki-mushrooms.html', 'https://www.mushroom-appreciation.com/the-two-enoki-mushrooms.html')
const enokiHarvestVideo: Citation = new Citation('Southwest Mushrooms. (2021, February 22). Golden Enoki Mushroom Harvest | Southwest Mushrooms [Video]. YouTube. https://www.youtube.com/watch?v=Ozsp9SS6-tg', 'https://www.youtube.com/watch?v=Ozsp9SS6-tg')
const mushOfTheMonthEnoki: Citation = new Citation('Volk, T. (n.d.).Flammulina velutipes, aka winter mushroom, velvet stem, velvet foot, enoki, enokitake, Tom Volk’s Fungus of the Month for March 1997. (n.d.). https://botit.botany.wisc.edu/toms_fungi/march97.html', 'https://botit.botany.wisc.edu/toms_fungi/march97.html')

const historyAndCultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Records show Enoki were first cultivated in China as far back as the 8th century C.E.', [enokiMushroomBreeding])
];

const scienceFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Enoki mushrooms were initially classified as a single species called Flammulina velutipes. However, in 2018, it was revealed that F. velutipes refers to the European species, while the species cultivated in Asia is now known as Flammulina filiformis.', [phylogenyAndSpeciesDelimination])
];

const agricultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Wild Enoki look vastly different from their cultivated counterparts. Cultivated Enoki mushrooms are characterized by their tall stature, small caps, and white appearance with a subtle orange or yellow tint. On the other hand, wild Enoki mushrooms are shorter, possess wider caps, and display a vibrant orange coloration. These variations in appearance are primarily attributed to genetic factors as well as reduced oxygen and light exposure during the cultivation process.', [theTwoEnoki, enokiHarvestVideo, enokiMushroomBreeding]),
    new ValueWithCitation('One of the stimuli that signals Enoki mushrooms to initiate fruiting (or mushroom growth) is a significant drop in temperature. As a result, Enoki mushrooms are commonly observed during the winter months when the conditions are too cold for many other mushrooms. This unique characteristic has earned Enoki the nickname "The Winter mushroom."', [enokiHarvestVideo, mushOfTheMonthEnoki])
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
    learnMore,
);
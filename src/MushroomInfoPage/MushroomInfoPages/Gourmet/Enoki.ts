// @ts-ignore - need to have .ts for some reason
import Citation from "../../DataClasses/Citation.ts";
// @ts-ignore - need to have .ts for some reason
import EcologicalGroup from "../../DataClasses/EcologicalGroup.ts";
// @ts-ignore - need to have .ts for some reason
import MushroomInfo from "../../DataClasses/MushroomInfo.ts";
// @ts-ignore - need to have .ts for some reason
import ValueWithReference from "../../DataClasses/ValueWithCitation.ts";

import enokiPhoto from '../../../Photos/Enoki/enoki.jpg';

const name = 'Enoki'

const latinName = 'Flammulina filiformis'

const commonNames = [
    '(China) 金針菇 (jīnzhēngū, "old needle mushroom)',
    '(China) 金菇 (jīngū, "Gold mushroom)',
    '(India) Futu',
    '(Korea) 팽이버섯 (Paengi Beoseot, "Mushroom planted near catalpa)',
    '(Vietnam) nấm kim châm ("Golden needle mushroom")',
    'Velvet foot',
    'Winter Mushroom'
];

const etymology = 'Enoki refers to the enoki tree, also called the chinese hackberry tree, that is is often found growing on.'

const location = 'Found in eastern and southern parts of asia with it being most popular in east asian countries like China, Japan, and Korea.'

const ecologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible = 'Yes! When eaten raw, the mushroom has a crisp texture and peppery taste. It is common to see it added to soup to add more texture without an overpowering flavor.'

// Citations
const enokiMushroomBreeding = new Citation('Sharma, V. P., Barh, A., Bairwa, R., Annepu, S. K., Kumari, B., & Kamal, S. (2021). Enoki Mushroom (Flammulina velutipes (Curtis) Singer) Breeding. Springer EBooks, 423–441. https://doi.org/10.1007/978-3-030-66969-0_11', 'https://link.springer.com/chapter/10.1007/978-3-030-66969-0_11');
const phylogenyAndSpeciesDelimination = new Citation('Wang, P., Liu, X. B., Dai, Y., Horak, E., Steffen, K., & Yang, Z. L. (2018b). Phylogeny and species delimitation of Flammulina: taxonomic status of winter mushroom in East Asia and a new European species identified using an integrated approach. Mycological Progress, 17(9), 1013–1030. https://doi.org/10.1007/s11557-018-1409-2', 'https://link.springer.com/article/10.1007/s11557-018-1409-2');
const theTwoEnoki = new Citation('Jenny. (2022). The Two Enoki Mushrooms: Foraging, Identification, and Cultivation - Mushroom Appreciation. Mushroom Appreciation. https://www.mushroom-appreciation.com/the-two-enoki-mushrooms.html', 'https://www.mushroom-appreciation.com/the-two-enoki-mushrooms.html')
const enokiHarvestVideo = new Citation('Southwest Mushrooms. (2021, February 22). Golden Enoki Mushroom Harvest | Southwest Mushrooms [Video]. YouTube. https://www.youtube.com/watch?v=Ozsp9SS6-tg', 'Southwest Mushrooms. (2021, February 22). Golden Enoki Mushroom Harvest | Southwest Mushrooms [Video]. YouTube. https://www.youtube.com/watch?v=Ozsp9SS6-tg')
const mushOfTheMonthEnoki = new Citation('Flammulina velutipes, aka winter mushroom, velvet stem, velvet foot, enoki, enokitake, Tom Volk’s Fungus of the Month for March 1997. (n.d.). https://botit.botany.wisc.edu/toms_fungi/march97.html', 'Flammulina velutipes, aka winter mushroom, velvet stem, velvet foot, enoki, enokitake, Tom Volk’s Fungus of the Month for March 1997. (n.d.). https://botit.botany.wisc.edu/toms_fungi/march97.html')

const historyAndCultureFacts = [
    new ValueWithReference('Records show Enoki being first cultivated in China as far back as the 8th century.', [enokiMushroomBreeding])
];

const scienceFacts = [
    new ValueWithReference('Up until 2018, Flammulina filiformis was considered to be the same species as its european and north american counter part Flammulina velutipes ', [phylogenyAndSpeciesDelimination])
];

const agricultureFacts = [
    new ValueWithReference('Enoki found in the wild versus those cultivated vary wildly in appearance. Cultivated Enoki are tall, with very small caps, and yellowish white whereas wild Enoki are short, have wide caps, and have an orange coloration. This difference is caused by methods used in cultivation and from genetics. When cultivated Enoki, they are given less oxygen and light leading to them elongating and whitening.', [theTwoEnoki, enokiHarvestVideo, enokiMushroomBreeding]),
    new ValueWithReference('Can be found during the winter months when other mushrooms would not grow. This is because Enoki fruiting can be triggered by a cold shock.', [enokiHarvestVideo, mushOfTheMonthEnoki])
];

const learnMore = [
    new Citation('Enoki Wikipedia', 'https://en.wikipedia.org/wiki/Flammulina_filiformis'),
    new Citation('Mushroom Appreciation', 'https://www.mushroom-appreciation.com/the-two-enoki-mushrooms.html'),
    new Citation('(video) Goden Enoki Mushroom Harvest | Southwest Mushrooms', 'https://www.youtube.com/watch?v=Ozsp9SS6-tg'),
    new Citation('Tom Volk\'s Fungus of the Month', 'https://botit.botany.wisc.edu/toms_fungi/march97.html'),
    new Citation('Wild About Mushrooms Cookbook: Enoki', 'https://www.mssf.org/cookbook/enoki.html')
];


const EnokiInfo = new MushroomInfo(
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
)

export default EnokiInfo;
import { 
    Citation,
    EcologicalGroup,
    MushroomInfo,
    ValueWithCitation
} from '../../../features/mushroom-info-page/data-objects';

import shiitakePhoto from '../../../assets/photos/shiitake/shiitake.png';

const name: string = 'Shiitake';

const latinName: string = 'Lentinula edodes';

const commonNames: string[] = [
    'Shiitake', 
    'Dongo (China)', 
    'Shanku (China)', 
    'black forest mushroom', 
    'golden oak mushroom', 
    'sawtooth oak mushroom'
];

const etymology: string = 'The word “Shii” refers to the tree that it was originally cultivated on and “Take” is the Japanese word for mushroom.';

const location: string = 'Shiitake are found in East Asia, most commonly Japan and China.';

const ecologicalGroup: EcologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible: string = 'Yes! The mushroom cap has a meaty texture and a woodsy flavor that intensifies as it is cooked. The stem is very tough and difficult to eat so instead it is often used to make soups.';

// Citations
const wasserShiitake = new Citation('Wasser, S. P. (2005). Shiitake (Lentinus edodes). Encyclopedia of dietary supplements, 653-664.', 'https://xn--c1atere.xn--p1ai/upload/files/Wasser_2013_09_shiitake.pdf'); //6
const lentinanForCancer = new Citation('Zhang, M., Zhang, Y., Zhang, L., & Tian, Q. (2019). Mushroom polysaccharide lentinan for treating different types of cancers: A review of 12 years clinical studies in China. Progress in molecular biology and translational science, 163, 297-328.', 'https://www.sciencedirect.com/science/article/abs/pii/S1877117319300341')
const lentinanInhibatsTumor = new Citation('Deng, S., Zhang, G., Kuai, J., Fan, P., Wang, X., Zhou, P., ... & Huang, Y. (2018). Lentinan inhibits tumor angiogenesis via interferon γ and in a T cell independent manner. Journal of Experimental & Clinical Cancer Research, 37(1), 1-12.', 'https://jeccr.biomedcentral.com/articles/10.1186/s13046-018-0932-y')
const growingGourmetAndMedicinalMush = new Citation('Stamets, P. (2011). Growing Gourmet and Medicinal Mushrooms. Ten Speed Press.', 'https://www.goodreads.com/en/book/show/53622')
const mostCommonMushWorldwide = new Citation('Royse, D. J., Baars, J. J. P., & Tan, Q. (2017). Current Overview of Mushroom Production in the World. In John Wiley & Sons, Ltd eBooks (pp. 5–13). Wiley. https://doi.org/10.1002/9781119149446.ch2', 'https://onlinelibrary.wiley.com/doi/10.1002/9781119149446.ch2');

// eslint-disable-next-line
const wildAboutMushroomsSf = new Citation('Wild About Mushrooms: Shiitake. (n.d.).', 'https://www.mssf.org/cookbook/shiitake.html');
// eslint-disable-next-line
const extractLentinan = new Citation('Rao, Z., Dong, Y., Zheng, X., Tang, K., & Liu, J. (2021). Extraction, purification, bioactivities and prospect of lentinan: A review. Biocatalysis and Agricultural Biotechnology, 37, 102163.', 'https://www.sciencedirect.com/science/article/abs/pii/S1878818121002590#bib106')

const historyAndCultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Shiitakes have been cultivated for over a thousand years, with the earliest recordings in the Sung Dynasty (960 -1127 CE).', [wasserShiitake]),
    new ValueWithCitation('The oldest recorded guide on growing Shiitake dates back to 1313 in the Chinese author Wang Cheng’s  "Nong Shu" (農書) or “Book of Agriculture”. ', [wasserShiitake])
];

const scienceFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Shiitake mushrooms have shown to improve the quality of life and efficacy of chemotherapy and radiation therapy.', [lentinanForCancer]),
    new ValueWithCitation('Shiitake contains a special type of polysaccharide (carbohydrate) called Lentinan which helps stimulate the immune system. For this reason, scientists are exploring its potential to help people with acquired immunodeficiency syndrome (AIDS).', [lentinanForCancer, lentinanInhibatsTumor]),
];

const agricultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('As of 2017, Shiitake mushrooms are the most cultivated mushroom in the world.', [mostCommonMushWorldwide]),
    new ValueWithCitation('The traditional method of growing Shiitake mushrooms in East Asia is called “Soak and Strike”. Fresh logs were leaned against already inoculated logs to propagate spores. The logs were then buried for a year to allow for colonization. Finally, when ready to fruit, the trees were unearthed and beaten with sticks.', [growingGourmetAndMedicinalMush]),
    new ValueWithCitation('The processed material left over after shiitakes stop fruiting can then be used as a growth substrate for other saprophytic mushrooms such as the common table mushroom.', [growingGourmetAndMedicinalMush])
];

const learnMore: Citation[] = [
    new Citation('Shiitake Wikipedia', 'https://en.wikipedia.org/wiki/Shiitake'),
    new Citation('Wild About Mushrooms Cookbook: Shiitake', 'https://www.mssf.org/cookbook/shiitake.html')
]

export const ShiitakeInfo: MushroomInfo = new MushroomInfo(
    name,
    [shiitakePhoto],
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
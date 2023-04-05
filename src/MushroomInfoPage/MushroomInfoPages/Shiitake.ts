// @ts-ignore - need to have .ts for some reason
import Citation from "../DataClasses/Citation.ts";
// @ts-ignore - need to have .ts for some reason
import EcologicalGroup from "../DataClasses/EcologicalGroup.ts";
// @ts-ignore - need to have .ts for some reason
import MushroomInfo from "../DataClasses/MushroomInfo.ts";
// @ts-ignore - need to have .ts for some reason
import ValueWithReference from "../DataClasses/ValueWithReference.ts";

import shiitakePhoto from '../../Photos/Shiitake/shiitake.png';

const wasserShiitake = new Citation('Wasser, S. P. (2005). Shiitake (Lentinus edodes). Encyclopedia of dietary supplements, 653-664.', 'https://xn--c1atere.xn--p1ai/upload/files/Wasser_2013_09_shiitake.pdf'); //6
const wildAboutMushroomsSf = new Citation('Wild About Mushrooms: Shiitake. (n.d.).', 'https://www.mssf.org/cookbook/shiitake.html');
const lentinanForCancer = new Citation('Zhang, M., Zhang, Y., Zhang, L., & Tian, Q. (2019). Mushroom polysaccharide lentinan for treating different types of cancers: A review of 12 years clinical studies in China. Progress in molecular biology and translational science, 163, 297-328.', 'https://www.sciencedirect.com/science/article/abs/pii/S1877117319300341')
const lentinanInhibatsTumor = new Citation('Deng, S., Zhang, G., Kuai, J., Fan, P., Wang, X., Zhou, P., ... & Huang, Y. (2018). Lentinan inhibits tumor angiogenesis via interferon γ and in a T cell independent manner. Journal of Experimental & Clinical Cancer Research, 37(1), 1-12.', 'https://jeccr.biomedcentral.com/articles/10.1186/s13046-018-0932-y')
const extractLentinan = new Citation('Rao, Z., Dong, Y., Zheng, X., Tang, K., & Liu, J. (2021). Extraction, purification, bioactivities and prospect of lentinan: A review. Biocatalysis and Agricultural Biotechnology, 37, 102163.', 'https://www.sciencedirect.com/science/article/abs/pii/S1878818121002590#bib106')
const growingGourmetAndMedicinalMush = new Citation('Stamets, P. (2011). Growing Gourmet and Medicinal Mushrooms. Ten Speed Press.', 'https://www.goodreads.com/en/book/show/53622')

const historyAndCultureFacts: string[] = [
    new ValueWithReference('The cultivation of Shiitake mushrooms date back to the Sung Dynasty in China, around 960-1127 C.E.', [wasserShiitake]),
    new ValueWithReference('The technique for cultivating Shiitake was first writen down in 1313 by the Chinese author Wang Zhen in his book "Nong Shu" (農書) or "Book of Agriculture".', [wasserShiitake])
];

const scienceFacts: string[] = [
    new ValueWithReference('Shiitake mushrooms have shown to improve the quality of life and efficacy of chemotherapy and radiation therapy.', [lentinanForCancer]),
    new ValueWithReference('Shiitake contain a special type of polysacharide (carbohydrate) called Lentinan which helps stimulate the immune system. For this reason, scientists are exploring its potential to help people with acquired immunodeficiency syndrome (AIDS).', [lentinanForCancer, lentinanInhibatsTumor]),
    new ValueWithReference('The health benefits of Shiitake mushrooms can be obtained through eating them or through brewing a tea and letting the mushrooms soak in the hot water.', [extractLentinan])
];

const agricultureFacts: string[] = [
    new ValueWithReference('Shiitake mushrooms are the second most cultivated mushroom in the world', [wildAboutMushroomsSf]),
    new ValueWithReference('The traditional method of cultivation practiced in China and Japan is called "Soak and Strike". This had cultivators lean logs against already infects trees and let the spores inoculate the fresh logs. These logs would then be buried for a year to allow for colonization of the mycelium throughout the log. Finally, after unburing the log, you strike it with other sticks. Once struck, this told the fungus to start fruiting.', [growingGourmetAndMedicinalMush])
];

const ShiitakeInfo = new MushroomInfo(
    "Shiitake",
    [shiitakePhoto],
    'Lentinula edodes',
    ['Shiitake', 'Dongo (China)', 'Shanku (China)', 'black forest mushroom', 'golden oak mushroom', 'sawtooth oak mushroom'],
    'Shii comes from the Shii tree which was often used for cultivation. "Take" is the Japanese word for mushroom.',
    "East Asia, very common on Japan and China",
    EcologicalGroup.SAPROPHYTIC,
    "Yes! The mushroom cap has a meaty texture and a woodsy flavor that intensifies as it is cooked. The stem is very tough so it is commonly used for making broth",
    historyAndCultureFacts,
    scienceFacts,
    agricultureFacts,
    new Citation('Shiitake Wikipedia', 'https://en.wikipedia.org/wiki/Shiitake')
)

export default ShiitakeInfo;

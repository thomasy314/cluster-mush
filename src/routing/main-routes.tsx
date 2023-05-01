import { Route, Routes } from 'react-router-dom'

import ComingShroom from '../pages/coming-shroom/coming-shroom'
import StyleGuide from '../pages/style-guide/style-guide'

import { MushroomInfoPage } from '../features/mushroom-info-page';

import { mushroomCategoryList, mushroomInfoPageList } from '../pages/mushroom-info-page';
import { About } from '../pages/about/about';
import { BrowseMushroomInfoPage } from '../pages/mushroom-info-page';
import { gourmetMushroomList } from '../pages/mushroom-info-page/gourmet';


const infoPages = mushroomInfoPageList.map(mushInfo => 
    <Route key={mushInfo.name} path={mushInfo.getPath()} element={<MushroomInfoPage mushroomInfo={mushInfo}/>}/>
);

export const MainRoutes = () => {
    return (
        <Routes>
            <Route index element={<ComingShroom />} />
            <Route path='/style-guide' element={<StyleGuide />} />
            <Route path='/about' element={<About />} />
            <Route path='/gourmet-mushrooms' element={<BrowseMushroomInfoPage title='Gourmet Mushrooms' infoList={gourmetMushroomList}/>} />
            <Route path='/browse-fungi' element={<BrowseMushroomInfoPage title='Mushroom Categories' infoList={mushroomCategoryList}/>} />
            {infoPages}
        </ Routes>
    )
}
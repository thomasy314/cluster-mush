import { Route, Routes } from 'react-router-dom'

import ComingShroom from '../pages/coming-shroom/coming-shroom'
import StyleGuide from '../pages/style-guide/style-guide'

import { MushroomInfoPage } from '../features/mushroom-info-page';

import { mushroomInfoPageList } from '../pages/mushroom-info-page';
import { About } from '../pages/about/about';


const infoPages = mushroomInfoPageList.map(mushInfo => 
    <Route key={mushInfo.name} path={mushInfo.getPath()} element={<MushroomInfoPage mushroomInfo={mushInfo}/>}/>
);

export const MainRoutes = () => {
    return (
        <Routes>
            <Route index element={<ComingShroom />} />
            <Route path='/style-guide' element={<StyleGuide />} />
            <Route path='/about' element={<About />} />
            {infoPages}
        </ Routes>
    )
}
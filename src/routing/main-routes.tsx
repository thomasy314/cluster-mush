import { Route, Routes } from 'react-router-dom'

import ComingShroom from '../pages/coming-shroom/coming-shroom'
import StyleGuide from '../pages/style-guide/style-guide'

import { MushroomInfoPage } from '../features/mushroom-info-page';

import { mushroomCategoryList, mushroomInfoPageList } from '../pages/mushroom-info-page';
import { About } from '../pages/about/about';
import { BrowseMushroomInfoPage } from '../pages/mushroom-info-page';
import { gourmetMushroomList } from '../pages/mushroom-info-page/gourmet';
import { Navigate } from 'react-router';
import { Fragment } from 'react';
import { createUnknownPathRedirect } from './routing-path-helpers';


const infoPages = mushroomInfoPageList.map(mushInfo =>
    <Fragment key={mushInfo.name}>
        <Route
            path={mushInfo.getCommonNamePath()}
            element={<MushroomInfoPage mushroomInfo={mushInfo} />}
        />
        <Route
            path={mushInfo.getLatinNamePath()}
            element={<MushroomInfoPage mushroomInfo={mushInfo} />}
        />
    </Fragment>
);

const redirectPages = mushroomInfoPageList.map(mushInfo =>
    <Route
        key={`${mushInfo.name}-qr-reroute`}
        path={`${mushInfo.getCommonNamePath()}-qr`}
        element={<Navigate to={`/${mushInfo.getCommonNamePath()}`} replace />}
    />
);

export const MainRoutes = () => {
    return (
        <Routes>
            <Route index element={<ComingShroom />} />
            <Route path='/style-guide' element={<StyleGuide />} />
            <Route path='/about' element={<About />} />
            <Route path='/gourmet-mushrooms' element={<BrowseMushroomInfoPage title='Gourmet Mushrooms' infoList={gourmetMushroomList} />} />
            <Route path='/mushroom-catergories' element={<BrowseMushroomInfoPage title='Mushroom Categories' infoList={mushroomCategoryList} />} />
            {redirectPages}
            {infoPages}
            {createUnknownPathRedirect()}
        </ Routes >
    )
}
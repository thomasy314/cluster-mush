import { Route, Routes } from 'react-router-dom';

import ComingShroom from '../pages/coming-shroom/coming-shroom';
import StyleGuide from '../pages/style-guide/style-guide';

import { MushroomInfoPage } from '../features/mushroom-info-page';

import { Fragment } from 'react';
import { Navigate } from 'react-router';
import { About } from '../pages/about/about';
import { BrowseMushroomInfoPage, mushroomCategoryList, mushroomInfoPageList } from '../pages/mushroom-info-page';
import { browseGourmetMushroomsDesc } from '../pages/mushroom-info-page/browse-mushroom-info-pages/browse-mushroom-info-pages-strings';
import { gourmetMushroomList } from '../pages/mushroom-info-page/definitions';
import { CommonRoutes } from './common-routes';
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

export enum MainPagePaths  {
    HOME = '/home',
    STYLE_GUIDE = '/style-guide',
    ABOUT = '/about',
    BROWSE_GOURMET_MUSHROOMS = '/gourmet-mushrooms',
    BROWSE_MUSHROOM_CATEGORIES = '/mushroom-categories',
    CONTACT = '/contact'
}

export const MainRoutes = () => {
    return (
        <Routes>
            {CommonRoutes}
            <Route index element={<ComingShroom />} />
            <Route path={MainPagePaths.STYLE_GUIDE} element={<StyleGuide />} />
            <Route path={MainPagePaths.ABOUT} element={<About />} />
            <Route path={MainPagePaths.BROWSE_GOURMET_MUSHROOMS} element={<BrowseMushroomInfoPage title='Gourmet Mushrooms' description={browseGourmetMushroomsDesc} infoList={gourmetMushroomList} />} />
            <Route path={MainPagePaths.BROWSE_MUSHROOM_CATEGORIES} element={<BrowseMushroomInfoPage title='Mushroom Categories' infoList={mushroomCategoryList} />} />
            {redirectPages}
            {infoPages}
            {createUnknownPathRedirect()}
        </ Routes >
    )
}
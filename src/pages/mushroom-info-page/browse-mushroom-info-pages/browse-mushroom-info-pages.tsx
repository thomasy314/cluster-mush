import { Container } from "@mui/material";
import { MushroomInfo } from "../../../features/mushroom-info-page/data-objects";
import { UrlImageGrid, UrlImageItem } from "../../../features/ui";
import { MushroomCategory } from "../mushroom-category-list";

import { ReactNode } from "react";
import './browse-mushroom-info-pages.css';

type BrowseMushroomInfoPageProps = {
    title: string,
    infoList: MushroomInfo[] | MushroomCategory[]
    description?: string | ReactNode,
}

export const BrowseMushroomInfoPage = (props: BrowseMushroomInfoPageProps) => {

    const mushroomItems = props.infoList.map((mushInfo): UrlImageItem => {

        const details = (
            <>
                <p>{mushInfo.name}</p>
            </>
        )

        return {
            name: mushInfo.name,
            image: mushInfo.images[0],
            details
        }
    });

    return (
        <Container id="browseMushroomInfoPagesTitle">
            <h1>{props.title}</h1>
            {props.description && (props.description instanceof String ? <p>{props.description}</p> : props.description)}
            <UrlImageGrid imageItems={mushroomItems} />
        </Container>
    )
}
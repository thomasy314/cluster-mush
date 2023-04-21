import { Grid } from "@mui/material"
import { ReactNode } from "react"
import { stringToPath } from "../../../routing/routing-path-helpers"

export type UrlImageItem = {
    image: string,
    name: string,
    path?: string,
    details?: ReactNode,
}

type UrlImageGridProps = {
    imageItems: UrlImageItem[]
}

export const UrlImageGrid = (props: UrlImageGridProps) => {

    return (
        <Grid container>
            {props.imageItems.map((datum) => (
                <Grid key={datum.name} item xs={6} md={4} lg={3} style={{ padding: "10px", textAlign: 'center' }}>
                    <a href={datum.path ?? stringToPath(datum.name)} style={{ display: 'block', aspectRatio: '1/1' }}>
                        <img
                            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                            src={datum.image}
                            alt={datum.name}
                            loading="lazy"
                        />
                    </a>
                    {datum.details}
                </Grid>
            ))}
        </Grid>
    )
}
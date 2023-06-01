import { Container } from "@mui/material"

export enum ShopMessages {
    BULK_DISCOUNT="10% off 3 pairs of earrings (SMALLCLUSTER) | 20% off 5 pairs of earrings (LARGECLUSTER)"
}

type ShopMessageBannerType = {
    message: string
}

export const ShopMessageBanner = (props: ShopMessageBannerType) => {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                backgroundColor: "secondary.main",
                textAlign: "center",
                padding: ".5em"
            }}
        >
            <p style={{ color: "white", margin:0 }}>{props.message}</p>
        </Container>
    )
}
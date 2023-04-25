import { Container } from "@mui/material"
import { SocialIcons } from "../../features/social-media"

export const About = () => {
    return (
        <Container>
            <h1>About Us</h1>
            <p>
                The goal of Cluster Mush is to promote appreciation and understanding of fungi through quick/fun facts accompanied by fungal artwork. We hope to show people the beauty of fungi and their potential, something western history has misunderstood and ignored.
            </p>
            <SocialIcons />
        </Container>
    )
}
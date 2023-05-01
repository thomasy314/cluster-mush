import { Container, Grid } from "@mui/material"
import { SocialIcons } from "../../features/social-media"

import portobelloImg from '../../assets/photos/commonStore/portobello.png';
import shiitakeImg from '../../assets/photos/shiitake/shiitake.png';
import enokiImg from '../../assets/photos/enoki/enoki.jpg';

const images = [
    {
        name: 'portobello',
        image: portobelloImg
    },
    {
        name: 'shiitake',
        image: shiitakeImg
    },
    {
        name: 'enoki',
        image: enokiImg
    }
]

export const About = () => {

    const imageList = images.map(datum =>
        <Grid key={datum.name} item xs={6} md={4} lg={3} style={{ padding: "10px", textAlign: 'center' }}>
            <img
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                src={datum.image}
                alt={datum.name}
                loading="lazy"
            />
        </Grid>
    )


    return (
        <Container style={{ textAlign: 'center' }}>
            <h1>About Cluster Mush</h1>
            <p><i>
                Cluster Mush’s goal is to promote appreciation and understanding of fungi through quick educational facts and artwork.
            </i></p>
            <Grid container justifyContent='center'>
                {imageList}
            </Grid>
            <p>
                Cluster Mush was created at the start of 2023 as a way to create more excitement and understanding for fungi which have been frequently overlooked in western history. The entire idea is for people to find fungal related art that then relays people to the website where they can learn more about the fungi they purchased. By doing this, people can spread interest about mushrooms through their new artwork and also educate others who ask about it.
            </p>
            <h2>About Me</h2>
            <p>
                My name is Thomas Young and in the summer of 2022 I fell in love with the amazing world of Fungi. Since then, I have spent my free time reading, learning, and engaging mushrooms in all the possible ways I can. I created Cluster Mush so that I can combine my passion for mushroom, education, and art into a single place. By doing so, I hope to help show everyone how much value mushrooms bring while also creating unique and interesting artwork to reflect this.
            </p>
            <SocialIcons />
        </Container>

    )
}
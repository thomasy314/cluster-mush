import { Container, Grid } from "@mui/material";
import { SocialIcons } from "../../features/social-media";

import portobelloImg from '../../assets/photos/commonStore/portobello.jpg';
import oysterImg from '../../assets/photos/oyster/oyster-mushroom-psms-field-tripe.jpg';
import shiitakeImg from '../../assets/photos/shiitake/shiitake.jpg';

import tomImg from '../../assets/photos/people/tomo.jpg';

import './about.css';

const images = [
    {
        name: 'portobello',
        image: portobelloImg
    },
    {
        name: 'enoki',
        image: oysterImg
    },
    {
        name: 'shiitake',
        image: shiitakeImg
    }
]

export const About = () => {

    const imageList = images.map(datum =>
        <Grid key={datum.name} item xs={6} md={4} lg={3} style={{ padding: "10px", textAlign: 'center' }}>
            <img
                className="aboutMushImage"
                src={datum.image}
                alt={datum.name}
                loading="lazy"
            />
        </Grid>
    )


    return (
        <Container id="aboutContainer">
            <h1>About Cluster Mush</h1>
            <p><i>
                Cluster Mush’s goal is to promote appreciation and understanding of fungi through fungal art and education.
            </i></p>
            <Grid container justifyContent='center'>
                {imageList}
            </Grid>
            <p>
                Cluster Mush was created in March of 2023 to promote appreciation and understanding of our funki fungi friends through artwork and education. The idea is to grab people’s attention through creative and unique fungal-related art and then relay them to the website where they can learn about the fungi they purchased. By doing this, people can spread interest in mushrooms through their new artwork and educate others who ask about it.
            </p>
            <h2>About Me</h2>
            <Grid container justifyContent='center'>
                <img id="tomAboutImage" alt="Tom the mushroom man" src={tomImg} />
            </Grid>
            <p>
                My name is Thomas Young and in the spring of 2022, I fell in love with the amazing world of Fungi. Since then, I have spent my free time reading, learning, and engaging mushrooms in all the possible ways I can. I created Cluster Mush to combine my passion for education and art while I explore and learn about the fantastic world of fungi. By doing so, I hope to show everyone how much value mushrooms bring while creating unique artwork to reflect beauty.
            </p>
            <SocialIcons />
        </Container>

    )
}
import { Container, Grid } from "@mui/material";

import enokiImage from '../../assets/photos/enoki/enoki.jpg';
import morelImage from '../../assets/photos/morel/morel.jpg';
import oysterImage from '../../assets/photos/oyster/oyster.jpg';
import porciniImage from '../../assets/photos/porcini/porcini.jpg';
import shiitakeImage from '../../assets/photos/shiitake/shiitake.png';
import { ShopItemPageInfo } from "../../features/shop/data-objects/shop-item-page-info";
import { shopItemPageList } from "./shop-item-page-list";

import './shop.css';

type ShopItemListing = {
  img: string,
  title: string,
  path: string
}

const itemDataTest = shopItemPageList.map((shopItem: ShopItemPageInfo): ShopItemListing => {
  return {
    img: shopItem.itemImages[0],
    title: shopItem.itemName,
    path: shopItem.getPath()
  }
});

const itemData = [
  {
    img: enokiImage,
    title: 'Enoki',
    link: 'enoki'
  },
  {
    img: morelImage,
    title: 'Morel',
    link: 'morel'
  },
  {
    img: oysterImage,
    title: 'Oyster',
    link: 'oyster'
  },
  {
    img: porciniImage,
    title: 'Porcini',
    link: 'porcini'
  },
  {
    img: shiitakeImage,
    title: 'Shiitake',
    link: 'shiitake'
  }
];

export const Shop = () => {
  return (
    <Container>
      <Grid container>
        {itemDataTest.map((datum) => (
          <Grid item xs={6} md={4} lg={3} style={{ padding: "10px", textAlign: 'center' }}>
            <a href={datum.path} style={{ display: 'block', aspectRatio: '1/1' }}>
              <img
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                src={datum.img}
                alt={datum.title}
                loading="lazy"
              />
            </a>
            <p>
              {datum.title}
            </p>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
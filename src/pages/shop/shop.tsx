import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ShopItemInfo } from "../../features/shop/data-objects";
import { getAvaiableItems } from "../../features/shop/item-data";
import { LoadingPage } from "../../features/ui";
import { stringToPath } from "../../routing/routing-path-helpers";

// TODO: replace with default image
import './shop.css';

export const Shop = () => {

  const [shopItems, setShopItems] = useState<ShopItemInfo[]>([]);
  const loading = Boolean(shopItems.length);

  useEffect(() => {
    getAvaiableItems()
      .then(shopItems => {
        setShopItems(shopItems);
      });
  }, []);

  return (
    <>
      {
        loading ?
          <Container>
            <h1 id='shopTitle'>Shop</h1>
            <Grid container>
              {shopItems.map((datum) => (
                <Grid key={datum.name} item xs={6} md={4} lg={3} style={{ padding: "10px", textAlign: 'center' }}>
                  <a href={stringToPath(datum.name)} style={{ display: 'block', aspectRatio: '1/1' }}>
                    <img
                      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                      src={datum.image}
                      alt={datum.name}
                      loading="lazy"
                    />
                  </a>
                  <p>{datum.name}</p>
                  <p>${datum.price}</p>
                </Grid>
              ))}
            </Grid>
          </Container>
          :
          <LoadingPage />
    }
    </>
  )
}
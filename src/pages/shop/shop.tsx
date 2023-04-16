import { Container, Grid } from "@mui/material";
import { getDocs, limit, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { shopItemInfoCollectionRef } from "../../features/firebase/firebase";
import { ShopItemInfo } from "../../features/shop/data-objects";
import { getAvaiableItems } from "../../features/shop/item-data";
import { stringToPath } from "../../routing/routing-path-helpers";

// TODO: replace with default image
import './shop.css';

export const Shop = () => {

  const [shopItems, setShopItems] = useState<ShopItemInfo[]>([]);

  useEffect(() => {

    getAvaiableItems()
      .then(shopItems => {
        setShopItems(shopItems);
      });
  }, []);

  return (
    <Container>
      <Grid container>
        {shopItems.map((datum) => (
          <Grid item xs={6} md={4} lg={3} style={{ padding: "10px", textAlign: 'center' }}>
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
  )
}
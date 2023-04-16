import { Container, Grid, ListItemSecondaryAction } from "@mui/material";
import { getDocs, limit, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseStorage, shopItemInfoCollectionRef } from "../../features/firebase/firebase";
import { stringToPath } from "../../routing/routing-path-helpers";

// TODO: replace with default image
import shiitakeImage from '../../assets/photos/shiitake/shiitake.png';

import './shop.css';
import { getDownloadURL, ref } from "firebase/storage";

type ShopItemListing = {
  img: string,
  title: string,
  path: string,
  price: number
};

const shopListingCacheName = 'shopListingCache';

// TODO: use firestore
const itemDataTest: ShopItemListing[] = [];

export const Shop = () => {

  const [shopItems, setShopItems] = useState<ShopItemListing[]>([]);

  useEffect(() => {
    console.log('getting info')
    const itemQuery = query(shopItemInfoCollectionRef, where("available", "==", true), limit(10));

    const cachedItems = localStorage.getItem(shopListingCacheName);
    if (cachedItems === null) {
      console.log('Not Cached');
      getDocs(itemQuery)
        .then(itemDocs => {
          const shopItemsNoImage: ShopItemListing[] = itemDocs.docs.map(d => {
            const itemName: string = d.get('name');
            const itemPath: string = stringToPath(itemName);
            const shopItem = {
              img: shiitakeImage,
              title: itemName,
              path: itemPath,
              price: d.get('price')
            };
            return shopItem;
          });
          setShopItems(shopItemsNoImage);


          const thumbnailWithImagePromise = itemDocs.docs.map((d): Promise<ShopItemListing> => {
            const itemName: string = d.get('name');
            const itemPath: string = stringToPath(itemName);
            const imageRef = ref(firebaseStorage, `shop-images/maitake.jpg`);
            return new Promise((resolve, reject) => {
              getDownloadURL(imageRef)
                .then(url => resolve({
                  img: url,
                  title: itemName,
                  path: itemPath,
                  price: d.get('price')
                }))
            });
          });

          Promise.all(thumbnailWithImagePromise).then((itemListings: ShopItemListing[]) => {
            setShopItems(itemListings);
            localStorage.setItem(shopListingCacheName, JSON.stringify(itemListings.map(val => JSON.stringify(val))));
          });
        });
    } else {
      console.log('CACHED!')
      console.log(JSON.parse(cachedItems));
      const test: string[] = JSON.parse(cachedItems);
      setShopItems(test.map(val => JSON.parse(val)));
    }

  }, []);

  return (
    <Container>
      <Grid container>
        {shopItems.map((datum) => (
          <Grid item xs={6} md={4} lg={3} style={{ padding: "10px", textAlign: 'center' }}>
            <a href={datum.path} style={{ display: 'block', aspectRatio: '1/1' }}>
              <img
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                src={datum.img}
                alt={datum.title}
                loading="lazy"
              />
            </a>
            <p>{datum.title}</p>
            <p>${datum.price}</p>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
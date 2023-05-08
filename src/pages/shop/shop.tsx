import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { ShopItemInfo } from "../../features/shop/data-objects";
import { getActiveStripeProducts } from "../../features/shop/item-data";
import { LoadingPage, UrlImageGrid, UrlImageItem } from "../../features/ui";

import './shop.css';

export const Shop = () => {

  const [shopItems, setShopItems] = useState<ShopItemInfo[]>([]);
  const loading = Boolean(shopItems.length);

  const itemInfoToImageGrid = (itemInfo: ShopItemInfo): UrlImageItem => {

    const details = (
      <>
        <p>{itemInfo.name}</p>
        <p>${itemInfo.price}</p>
      </>
    )

    return {
      image: itemInfo.image,
      name: itemInfo.name,
      details
    }
  }

  useEffect(() => {
    getActiveStripeProducts()
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
            <UrlImageGrid imageItems={shopItems.map(itemInfoToImageGrid)} />
          </Container>
          :
          <LoadingPage />
      }
    </>
  )
}
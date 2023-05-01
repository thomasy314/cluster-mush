import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { ShopItemInfo } from "../../features/shop/data-objects";
import { getAvaiableItems } from "../../features/shop/item-data";
import { LoadingPage, UrlImageGrid, UrlImageItem } from "../../features/ui";

// TODO: replace with default image
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
            <UrlImageGrid imageItems={shopItems.map(itemInfoToImageGrid)} />
          </Container>
          :
          <LoadingPage />
      }
    </>
  )
}
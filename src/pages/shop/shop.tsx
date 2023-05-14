import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { ShopItemInfo } from "../../features/shop/data-objects";
import { SearchStripeProductsProps, getActiveStripeProducts } from "../../features/shop/item-data";
import { LoadingPage, UrlImageGrid, UrlImageItem } from "../../features/ui";

import { useSearchParams } from "react-router-dom";
import { pathToString, stringToPath } from "../../routing/routing-path-helpers";
import { mushroomInfoPageList } from "../mushroom-info-page";
import './shop.css';

type shopProps = {
  specificMushroom?: string
}

export const Shop = (props: shopProps) => {

  const [shopItems, setShopItems] = useState<ShopItemInfo[]>([]);
  const loading = Boolean(shopItems.length);

  const [searchParams] = useSearchParams();
  const mushroomName: string | undefined = searchParams.get('mushroomName') ?? undefined;

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

    const isValidMushroomName: boolean = mushroomInfoPageList.find(o => stringToPath(o.name) === mushroomName) !== undefined;
    const searchStripeProductsProps: SearchStripeProductsProps = {
      mushroomName: isValidMushroomName ? mushroomName : undefined
    }
    getActiveStripeProducts(searchStripeProductsProps)
      .then(shopItems => {
        setShopItems(shopItems);
      });
  }, [mushroomName]);

  return (
    <>
      {
        loading ?
          <Container>
            <h1 className='shopTitle'>Shop</h1>
            {mushroomName && <h2 className='shopTitle'>{pathToString(mushroomName)}</h2>}
            <UrlImageGrid imageItems={shopItems.map(itemInfoToImageGrid)} />
          </Container>
          :
          <LoadingPage />
      }
    </>
  )
}
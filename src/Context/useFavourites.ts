import { useEffect, useMemo, useState } from "react";
import { Product } from "../types/types";

export const useFavourites = () => {
  const [favouritesItems, setfavouritesItems] = useState<Product[]>([]);

  useEffect(
    () =>
      setfavouritesItems(
        JSON.parse(localStorage.getItem("favourites") || "[]")
      ),
    []
  );

  useEffect(
    () => localStorage.setItem("favourites", JSON.stringify(favouritesItems)),
    [favouritesItems]
  );
  const favourites = {
    items: useMemo((): Product[] => favouritesItems, [favouritesItems]),

    totalCount: useMemo(
      (): number =>
        favouritesItems.reduce(
          (totalCount, item) => totalCount + (item.quantity || 1),
          0
        ),
      [favouritesItems]
    ),

    add: (item: Product) =>
      favourites.includes(item.id)
        ? favourites.increase(item.id)
        : setfavouritesItems((items) => [...items, item]),

    countOf: (itemId: number) =>
      favourites.items.find((item) => item.id === itemId)?.quantity || 0,

    remove: (itemId: number) =>
      setfavouritesItems((items) => items.filter((item) => item.id !== itemId)),

    includes: (itemId: number) =>
      favourites.items.some((item) => item.id === itemId),

    increase: (itemId: number) =>
      setfavouritesItems((items) =>
        items.map((item) =>
          item.id === itemId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        )
      ),

    decrease: (itemId: number) =>
      favourites.countOf(itemId) > 1
        ? setfavouritesItems((items) =>
            items.map((item) =>
              item.id === itemId
                ? { ...item, quantity: (item.quantity || 1) - 1 }
                : item
            )
          )
        : favourites.remove(itemId),
  };

  return favourites;
};

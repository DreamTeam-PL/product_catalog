import { CartItem, FavouriteItem } from "../ItemList/types";

export type CartStorageValues = {
    items: CartItem[];
    add: (item:CartItem) => void;
    remove: (itemId:number) => void;
    increase: (itemId:number) => void;
    decrease: (itemId:number) => void;
    totalCost: number;
    totalCount: number;
}
  
export type FavouritesValues = {
    items: FavouriteItem[];
    add: (item:FavouriteItem) => void;
    remove: (itemId:number) => void;
    increase: (itemId:number) => void;
    decrease: (itemId:number) => void;
    totalCount: number;
}
  
export type StorageContextValues =  { 
    cart: CartStorageValues;
    favourites: FavouritesValues;
};

export type StorageProviderProps = {
    children: React.ReactNode;
};
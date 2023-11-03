import { Product } from "../types/types";

export type CartStorageValues = {
    items: Product[];
    add: (item:Product) => void;
    remove: (itemId:number) => void;
    increase: (itemId:number) => void;
    decrease: (itemId:number) => void;
    totalCost: number;
    totalCount: number;
}
  
export type FavouritesValues = {
    items: number[];
}
  
export type StorageContextValues =  { 
    cart: CartStorageValues;
    favourites: FavouritesValues;
};

export type StorageProviderProps = {
    children: React.ReactNode;
};
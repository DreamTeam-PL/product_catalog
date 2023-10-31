import React, { useContext } from 'react'; 
import { useFavourites } from './useFavourites';
import { useCart } from './useCart';
import { StorageContextValues, StorageProviderProps } from './types';

const StorageContext = React.createContext<StorageContextValues | null>(null);

export const StorageProvider = ({ children }: StorageProviderProps) => { 
 

  return (
    <StorageContext.Provider value={{
      cart: {...useCart()},
      favourites: {...useFavourites()}
    }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export const useStorageContext = () => {
  const values = useContext(StorageContext);

  if (!values) {
    throw new Error('StorageContext can be used only in StorageProvider!');
  }

  return values;
};
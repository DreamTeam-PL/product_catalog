import './favouritesList.scss';
import { useStorageContext } from '../../Context/StorageContext';
import { FavouritesItem } from './FavouritesItem';

export const FavouriteList: React.FC = () => {
    const { favourites } = useStorageContext();
    const favProducts = favourites.items;

    return (
        <div className="products__catalog">
            {favProducts.map(item => (<FavouritesItem
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity || 1}
                price={item.price}
                screen={item.screen}
                capacity={item.capacity}
                ram={item.ram}
                category={item.category}
                phoneId={item.phoneId}
                itemId={item.itemId}
                fullPrice={item.fullPrice}
                color={item.color}
                year={item.year}
                image={item.image}
                img=''
                remove={() => favourites.remove(item.id)}
                includes={() => favourites.includes(item.id)}
            />))}
        </div>
    );
}


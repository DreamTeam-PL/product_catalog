import { FavouriteList } from "../../Components/FavouritesList/FavouritesList";
import { useStorageContext } from "../../Context/StorageContext";

import '../Catalog/catalog.scss';
export const Favourites: React.FC = () => {
    const { favourites } = useStorageContext();

    return (
        <section className="hmm products">
            <div className="products__position">
                <div className="products__position-icon">
                    <img
                        className='img'
                        src={require('../Catalog/home.png')}
                        alt="Home" />
                </div>
                <div className="products__position-icon">
                    <img
                        className='img'
                        src={require('../Catalog/arrow right.png')}
                        alt="Right arrow direction" />
                </div>
                <p className="products__position-name">Favourites</p>
            </div>
            <h1 className="products__title">Favourites</h1>
            <p className="products__quantity"><span>{favourites.items.length}</span> models</p>
                {!favourites.items.length
                    ? <span>Looks like you don't have any favorite products yet...</span>
                    : <FavouriteList />
                }
        </section>
    )

}
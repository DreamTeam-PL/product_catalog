import { FavouriteList } from "../../Components/FavouritesList/FavouritesList";
import { useStorageContext } from "../../Context/StorageContext";
import { Breadcrumbs } from "../../Components/Breadcrumbs/Breadcrumbs";

import '../Catalog/catalog.scss';
export const Favourites: React.FC = () => {
    const { favourites } = useStorageContext();

    return (
        <section className="hmm products">
            <Breadcrumbs />
            <h1 className="products__title">Favourites</h1>
            <p className="products__quantity"><span>{favourites.items.length}</span> models</p>
                {!favourites.items.length
                    ? <span>Looks like you don't have any favorite products yet...</span>
                    : <FavouriteList />
                }
        </section>
    )

}

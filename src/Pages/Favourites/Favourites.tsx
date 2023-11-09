import { useStorageContext } from "../../Context/StorageContext";
import { Breadcrumbs } from "../../Components/Breadcrumbs/Breadcrumbs";

import '../Catalog/catalog.scss';
import { ProductCatalog } from "../../Components/ProductCatalog/ProductCatalog";
export const Favourites: React.FC = () => {
    const { favourites } = useStorageContext();

    return (
        <section className="catalog">

            <Breadcrumbs 
                className="catalog__breadcrumb"
            />

            <section>
                <h1 className="catalog__title">Favourites</h1>
                <p className="catalog__count">{favourites.items.length} models</p>
            </section>

            {!favourites.items.length
                ? <span>Looks like you don't have any favorite products yet...</span>
                : <ProductCatalog
                products={favourites.items}
                filters={[]}
              />
            }
        </section>
    )

}

import { Breadcrumbs } from "../../Components/Breadcrumbs/Breadcrumbs";
import { Card } from "../../Components/Card/Card";

import '../Catalog/catalog.scss';
export const Favourites:React.FC = () => (
    <section className="hmm products">
    <Breadcrumbs />
    <h1 className="products__title">Mobile phones</h1>
    <p className="products__quantity"><span>5</span> models</p>
    <div className="products__catalog">
        {/* <Card item={{
            id: 0,
            name: "",
            quantity: 0,
            price: 0, 
        }} /> */}
   
    </div>
    </section>)
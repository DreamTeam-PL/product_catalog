import { Card } from "../../Components/Card/Card";

import '../Catalog/catalog.scss';
export const Favourites:React.FC = () => (<section className="hmm products">
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
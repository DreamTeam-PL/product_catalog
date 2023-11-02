import { Button } from "../Components/Button/Button";
import { Card } from "../Components/Card/Card";
import { Pagination } from "../Components/Pagination/Pagination";

import './catalog.scss';
export const Catalog:React.FC = () => (<section className="hmm products">
    <div className="products__position">
        <div className="products__position-icon">
            <img
            className='img'
            src={require('./home.png')}
            alt="Home" />
        </div>
        <div className="products__position-icon">
            <img
            className='img'
            src={require('./arrow right.png')}
            alt="Right arrow direction" />
        </div>
        <p className="products__position-name">Phones</p>
    </div>
    <h1 className="products__title">Mobile phones</h1>
    <p className="products__quantity"><span>95</span> models</p>
    <div className="products__filter">
        <div className="products__filter-filter">
            <div className="products__filter-filter-name"><p>Sort by</p></div>
            <div className="products__filter-filter-button">
                <Button type='color' value='try'/>
            </div>   
        </div>
        <div className="products__filter-filter">
            <div className="products__filter-filter-name"><p>Items on Page</p></div>
            <div className="products__filter-filter-button">
                <Button type='color' value='try'/>
            </div>   
        </div>
        
    </div>
    <div className="products__catalog">
        <Card item={{
            id: 0,
            name: "",
            quantity: 0,
            price: 0,
            img: ""
        }} />
     
    </div>
    <div className="products__buttons">
      <Pagination />
    </div>
    
</section>)
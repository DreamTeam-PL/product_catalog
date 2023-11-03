import { Button } from "../Components/Button/Button";
import { Card } from "../Components/Card/Card";
import { Pagination } from "../Components/Pagination/Pagination";
import { ProductService } from '../Api/Products';
import './catalog.scss';
import { useEffect, useState } from "react";
import { Product } from "../types/types";

export const Catalog:React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProducts()
          .then((pr:Product[]) => setProducts(pr))
          .catch((errr) => console.error("Error", errr));
      }, [products]);
    
    return (<section className="hmm products">
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
        {products.map(product => (<Card key={product.id} item={product} />))}
    </div>
    <div className="products__buttons">
      <Pagination />
    </div>
    
</section>)}
import { Button } from "../../Components/Button/Button";
import { Card } from "../../Components/Card/Card";
import { Pagination } from "../../Components/Pagination/Pagination";
import { ProductService } from '../../Api/Products';
import './catalog.scss';
import { useEffect, useState } from "react";
import { Product } from "../../types/types";
import { Breadcrumbs } from "../../Components/Breadcrumbs/Breadcrumbs";
import { DropDownSelect } from "../../Components/DropDownSelect/DropDownSelect";

export const Catalog:React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [perPage, setPerPage] = useState<number>(16);

    useEffect(() => {
        ProductService.getProducts()
          .then((pr:Product[]) => setProducts(pr))
          .catch((errr) => console.error("Error", errr));
      }, [products]);
    
    return (<section className="hmm products">
      <Breadcrumbs />
    <h1 className="products__title">Mobile phones</h1>
    <p className="products__quantity"><span>95</span> models</p>
    <div className="products__filter">
        <div className="products__filter-filter">
            <div className="products__filter-filter-name"><p>Sort by</p></div>
            <div className="products__filter-filter-button">
                <DropDownSelect
                    options={['Najnowsze', 'Najstarsze', 'Najdroższe', 'Najtańsze']} 
                    onChange={(option: number) => null}
                />
            </div>   
        </div>
        <div className="products__filter-filter">
            <div className="products__filter-filter-name"><p>Items on Page</p></div>
            <div className="products__filter-filter-button">
                <DropDownSelect 
                    options={['16', '32', '63']}
                    onChange={(option: number) => setPerPage(option)}
                />
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
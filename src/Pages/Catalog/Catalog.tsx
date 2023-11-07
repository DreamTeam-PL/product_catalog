import { Button } from "../../Components/Button/Button";
import { Card } from "../../Components/Card/Card";
import { Pagination } from "../../Components/Pagination/Pagination";
import { ProductService } from '../../Api/Products';
import './catalog.scss';
import { useEffect, useState } from "react";
import { Product } from "../../types/types";
import { Breadcrumbs } from "../../Components/Breadcrumbs/Breadcrumbs";
import { DropDownSelect } from "../../Components/DropDownSelect/DropDownSelect";
import { ProductCatalog } from "../../Components/ProductCatalog/ProductCatalog";
import { useCatalog } from "./useCatalog";
import { PER_PAGE_OPTIONS, SORT_TYPES } from "../../utils/Constants";


export const Catalog:React.FC = () => {
    const {
        resultCount,
        products,
        limit,
        sort,
        order,
        updateSearchParams,
    } = useCatalog();


    return (
    <section className="catalog">

        <Breadcrumbs />

        {!products && <p>Waiting for data from server...</p>}

        {products && products.length === 0 && <p>There is no products for you..</p>}

        {products && (<ProductCatalog 
            products={products}
            filters={[
                {
                    label: 'Sort by', 
                    options: SORT_TYPES.map(e => e.title), 
                    onChange: (option:number) => updateSearchParams({sort: SORT_TYPES[option].sortBy, order: SORT_TYPES[option].sortType}),   
                    selected: ((limit)=> limit < 0 ? 0 : limit)(SORT_TYPES.findIndex(e => e.sortBy === sort && e.sortType === order))
                },
                {
                    label: 'Items on Page',
                    options: PER_PAGE_OPTIONS,
                    onChange: (option:number) => updateSearchParams({limit: PER_PAGE_OPTIONS[option]}),
                    selected:  PER_PAGE_OPTIONS.findIndex(e => e === limit.toString()) 
                },
            ]}
        />)}
         
        <section className="catalog__pagination">
           <Pagination 
                itemsPerPage={limit}
                totalAmount={Number(resultCount)}
           /> 
        </section>
    
    </section>
)}
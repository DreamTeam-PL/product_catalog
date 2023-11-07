import { useEffect, useMemo, useState } from "react";
import { Product } from "../../types/types";
import { useSearchParams } from "react-router-dom";
import { ProductService } from "../../Api/Products";
import { PER_PAGE_OPTIONS } from "../../utils/Constants";




export const useCatalog =() => {
    const [products, setProducts] = useState<Product[] | null>(null); 
    const [resultCount, setResultCount] = useState<number>(0);
    let [searchParams, setSearchParams] = useSearchParams();

    const getLimit = () => Number(PER_PAGE_OPTIONS[((limit)=> limit < 0 ? 0 : limit)
        (PER_PAGE_OPTIONS.findIndex(e => e === searchParams.get('limit')))]);
    const currentPage = Number(searchParams.get('page') || 1);

    const [limit, setLimit] = useState<number>(getLimit());


    useEffect(() => {
        ProductService.getProducts({
            page: currentPage,
            limit: getLimit(),
            sortBy: searchParams.get('sort') || 'id',
            order: searchParams.get('order') || 'asc',
        }).then((result) => { 
            setProducts(result.data);
            setLimit(result.itemsPerPage);
            setResultCount(result.count); 
        }).catch((errr) => console.error("Error", errr));
    }, [searchParams]); 

    return {
        resultCount,
        products,
        limit,
        updateSearchParams: (params:{[key:string]:string}) => {
            setSearchParams({...searchParams.toString().split('&').reduce((result, current) => {
                const [key, value] = current.split('=');
                return Object.assign(result, {[key]: value});
            }, {}), ...params})
        } ,
        sort: searchParams.get('sort'),
        order: searchParams.get('order'),
    }
}
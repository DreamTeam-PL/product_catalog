import { Product } from '../types/types';
import { client } from '../utils/fetchClient';

type getProductsOpts = {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: string;
};

type ListResult = {
    count: number;
    currentPage: number;
    data: Product[];
    itemsPerPage: number;
    pages: number;
}

export abstract class ProductService {
    static getProducts = ({
      page = 1,
      limit = 16,  
      sortBy = 'id',
      order = 'asc'
    }:getProductsOpts) => {
        return client.get<ListResult>(`/products/?page=${page}&limit=${limit}&sort=${sortBy}&sortType=${order}`);
    };

    static getNewest = () => {
        return client.get<Product[]>(`/products/new`);
    };

    static getDiscounted = () => {
        return client.get<Product[]>(`/products/discount`);
    };


}

// Add more methods here
import { Product } from '../types/types';
import { client } from '../utils/fetchClient';

export abstract class ProductService {
    static getProducts = () => {
        return client.get<Product[]>(`/products/`);
    };

    static getNewest = () => {
        return client.get<Product[]>(`/products/new`);
    };

    static getDiscounted = () => {
        return client.get<Product[]>(`/products/discount`);
    };


}

// Add more methods here
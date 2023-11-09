import { Product } from "../../types/types";
import { Card } from "../Card/Card";
import { DropDownSelect } from "../DropDownSelect/DropDownSelect";
import './ProductCatalog.scss';



type Props = { 
    products: Product[];
    filters?: {
        label?: string;
        options: string[];
        onChange: (option:number) => void;
        selected?: number;
    }[];
} 

export const ProductCatalog:React.FC<Props> = ({ products, filters = [] }) => {
    return (
    <section className="product-catalog"> 
        <section className="product-catalog__filters">
            {filters.map((filter, i) => (<DropDownSelect
                key={filter.label || i.toString()}
                className="product-catalog__filter"
                label={filter.label}
                options={filter.options}
                onChange={filter.onChange}  
                selected={filter.selected || 0}
            />  ))} 
        </section>

        <main className="product-catalog__grid">
            {products.map(product => (<Card
                key={product.id} 
                item={product}
                className="product-catalog__card"
            />))}
        </main>
    </section>);
}
import { useEffect, useState } from "react";
import { Product } from "../../types/types";
import { Card } from "../Card/Card";
import { DropDownSelect } from "../DropDownSelect/DropDownSelect";
import './ProductCatalog.scss';



type Props = {
    products: Product[];
    filters?: {
        label?: string;
        options: string[];
        onChange: (option: number) => void;
        selected?: number;
    }[];
}

export const ProductCatalog: React.FC<Props> = ({ products, filters = [] }) => {
    const [focusStates, setFocusStates] = useState(filters.map(() => false));

    const handleGlobalClick = (index: number) => () => {
        const updatedFocusStates = [...focusStates];
        updatedFocusStates[index] = false;
        setFocusStates(updatedFocusStates);
    };

    useEffect(() => {
        filters.forEach((_, i) => {
            document.addEventListener('mousedown', handleGlobalClick(i));
        });

        return () => {
            filters.forEach((_, i) => {
                document.removeEventListener('mousedown', handleGlobalClick(i));
            });
        };
    }, [filters]);

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
                    focus={focusStates[i]}
                    setFocus={(focus) => {
                        const updatedFocusStates = [...focusStates];
                        updatedFocusStates[i] = focus;
                        setFocusStates(updatedFocusStates);
                    }}
                />))}
            </section>

            <main className="product-catalog__grid">
                {products.map(product => (<Card key={product.id} item={product} />))}
            </main>
        </section>);
}
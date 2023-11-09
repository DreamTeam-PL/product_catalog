import './ItemList.scss';
import { Item } from './Item'; 
import { useStorageContext } from '../../Context/StorageContext';
import { Product } from '../../types/types';

type ItemListProps = {
    items: Product[];
}

export const ItemList:React.FC<ItemListProps> = ({ items }) => {
    const { cart } = useStorageContext();

    return (<section className='cart__items item-list'>
        {items.map(item => (<Item 
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity || 1}
            price={item.price}
            img={item.image}
            increase={() => cart.increase(item.id)}
            decrease={() => cart.decrease(item.id)}
            remove={() => cart.remove(item.id)}
        />))}
        
    </section>);
}


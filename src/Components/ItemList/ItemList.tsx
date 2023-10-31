import './ItemList.scss';
import { Item } from './Item';
import { CartItem } from './types';
import { useStorageContext } from '../../Context/StorageContext';

type ItemListProps = {
    items: CartItem[];
}

export const ItemList:React.FC<ItemListProps> = ({ items }) => {
    const { cart } = useStorageContext();

    return (<section className='cart__items item-list'>
        {items.map(item => (<Item 
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            img=""
            increase={() => cart.increase(item.id)}
            decrease={() => cart.decrease(item.id)}
            remove={() => cart.remove(item.id)}
        />))}
        
    </section>);
}


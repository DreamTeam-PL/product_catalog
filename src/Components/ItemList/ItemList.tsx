import './ItemList.scss';
import { Item } from './Item';
import { CartItem } from './types';

type ItemListProps = {
    items: CartItem[];
    controller: {
        increase: (id: number) => void;
        decrease: (id: number) => void;
        remove: (id: number) => void;
    }
}

export const ItemList:React.FC<ItemListProps> = ({ items, controller }) => {

    return (<section className='cart__items item-list'>
        {items.map(item => (<Item 
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            img=""
            increase={() => controller.increase(item.id)}
            decrease={() => controller.decrease(item.id)}
            remove={() => controller.remove(item.id)}
        />))}
        
    </section>);
}


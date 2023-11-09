import { Button } from '../Button/Button';
import './Item.scss';

type ItemProps = {
    id: number;
    img: string;
    name: string;
    quantity: number;
    price: number;
    increase: () => void;
    decrease: () => void;
    remove: () => void;
}

export const Item:React.FC<ItemProps> = ({
    name,
    price, 
    img,
    quantity,
    increase,
    decrease,
    remove,
}) => { 
return (
    <article className='item-list__item item'>
        <section className='item__info'>
            <Button 
                type="icon"
                icon="remove"
                onClick={remove}
            /> 
            <img
                className="item__image"
                src={`https://phone-api-l15u.onrender.com/${img}`}
                alt="iphone" />
            <h2 className='item__name'>{name}</h2>
        </section>
        
        <div className='item__quantity'>
            <Button 
                type="circle"
                icon="decrease"
                onClick={decrease}
                disabled={quantity === 1}
            />
            <p className='item__quantity-text'>{quantity}</p>
            <Button 
                type="circle"
                icon="increase"
                onClick={increase}
            />
            <p className='item__price'>{quantity * price}</p>
        </div> 
        
        
    </article>);
}
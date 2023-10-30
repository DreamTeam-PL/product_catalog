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
                src="https://s3-alpha-sig.figma.com/img/e533/3ccc/c92ea7f15dd790beb46989cd636c7582?Expires=1699833600&Signature=OQygOc2Sd8M8wbrE62bTLNdbiH-HKCe7KLQFZ~mApNxaKlyPcGLFC0qfhEu2xY8sh~zDqO9FYND4HQYy4KFLZ062QQvDqioFmLxqz00zpL2USaS~rVnrWffio0Cq8WK6zmqnDCweX-pHaS2Qrl3Vm6lArcaanE2i0kFynsKONaQ1yZbVkRYuja~ZU2N7INI7lEL8LcICJ-Yq0A2udalYwWcIj3dQHuPugEq3pMlbYhC-J7cPmHnKVrDf51~qFD2u0~wbVPLjV-5WIYz4EHwz-tsqGAvqEkFhMYvG6wqMtXESuzTnAjEO4Hes9kLFke0xcO1R7uCYDkkVwDZQDPMZOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
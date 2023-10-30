import { useState } from 'react';
import { ItemList } from '../../Components/ItemList/ItemList';
import './Cart.scss';
import { CartItem } from '../../Components/ItemList/types';
import { Button } from '../../Components/Button/Button';
 

export const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
            quantity: 1,
            price: 999,
            img: '',
        },
        {
            id: 2,
            name: 'AApple iPhone 14 Plus 128GB PRODUCT Red (MQ513)',
            quantity: 1,
            price: 859,
            img: '',
        },
        {
            id: 3,
            name: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
            quantity: 1,
            price: 799,
            img: '',
        }
    ]);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const cardController = {
        decrease: (id: number) => setCartItems(current => current.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity:item.quantity - 1 } : item)),
        increase: (id: number) => setCartItems(current => current.map(item => item.id === id ? { ...item, quantity:item.quantity + 1 } : item)),
        remove: (id: number) => setCartItems(current => current.filter(item => item.id !== id)),
    }

    return(<main className="cart">
        <Button 
            type="iconText"
            icon="back"
            value="Back"
        /> 
       <h1 className='cart__title'>Cart</h1>
       <div className='cart__container'>
            <ItemList items={cartItems} controller={cardController} />
            <section className='cart__checkout'>
                <h2 className='cart__checkout-total'>{totalCost}</h2>
                <p className='cart__checkout-count'>Total for {totalItems} items</p>
                <line className='cart__checkout-line'/>
                <Button 
                    type="color"
                    value="Checkout"
                />
            </section>
       </div>
    </main>);}
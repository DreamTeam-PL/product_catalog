import './Cart.scss';
import { ItemList } from '../../Components/ItemList/ItemList';
import { Button } from '../../Components/Button/Button';
import { useStorageContext } from '../../Context/StorageContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SuccessMessage } from './SuccessMessage';


export const Cart = () => {
    const { cart } = useStorageContext();
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(false);

    const navigateTo = () => {
        setSuccessMessage(true);
        setTimeout(() => {
            navigate('/');
        }, 3000)
    };

    return (
        <>
            {successMessage && <SuccessMessage />}
            {!successMessage && <main className="cart">
                <Button
                    type="iconText"
                    icon="back"
                    value="Back"
                />
                <h1 className='cart__title'>Cart</h1>
                <div className='cart__container'>
                    <ItemList items={cart.items} />
                    <section className='cart__checkout'>
                        <h2 className='cart__checkout-total'>{cart.totalCost}</h2>
                        <p className='cart__checkout-count'>Total for {cart.totalCount} items</p>
                        <div className='cart__checkout-line' />
                        <Button
                            type="color"
                            value="Checkout"
                            onClick={navigateTo}
                        />
                    </section>
                </div>
            </main>}
        </>);
}
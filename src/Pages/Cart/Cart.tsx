import './Cart.scss';
import { ItemList } from '../../Components/ItemList/ItemList';
import { Button } from '../../Components/Button/Button';  
import { useStorageContext } from '../../Components/Context/StorageContext';
 

export const Cart = () => {
    const { cart } = useStorageContext(); 

    return(<main className="cart">
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
                <div className='cart__checkout-line'/>
                <Button 
                    type="color"
                    value="Checkout"
                />
            </section>
       </div>
    </main>);}
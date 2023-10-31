import { useEffect, useMemo, useState } from 'react'; 
import { CartItem } from '../ItemList/types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); 

  useEffect(() => setCartItems(JSON.parse(localStorage.getItem('cart') || '[]')), []);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cartItems)), [cartItems]);
    const cart = {
      items: useMemo(():CartItem[] => cartItems, [cartItems]),
      totalCost: useMemo(():number => cartItems.reduce((totalCost, item) => totalCost + (item.quantity * item.price), 0), [cartItems]),
      totalCount: useMemo(():number => cartItems.reduce((totalCount, item) => totalCount + item.quantity, 0), [cartItems]),

      add: (item:CartItem) => cart.includes(item.id) ? cart.increase(item.id) : setCartItems(items => [...items, item]),

      countOf: (itemId:number) => cart.items.find(item => item.id === itemId)?.quantity || 0,

      remove: (itemId:number) => setCartItems(items => items.filter(item => item.id !== itemId)),

      includes: (itemId:number) => cart.items.some(item => item.id === itemId),

      increase: (itemId:number) => setCartItems(items => items
        .map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)), 

      decrease: (itemId:number) => cart.countOf(itemId) > 1 
        ? setCartItems(items => items
          .map(item => item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item))
        : cart.remove(itemId),
  };

  return cart;
};
import React from 'react';
import './card.scss'; 
import { useStorageContext } from '../../Context/StorageContext';
import { Product } from '../../types/types';


export const Card: React.FC<{ item: Product }> = ({ item }) => {
  const { cart, favourites } = useStorageContext(); 

  return (
    <div className='card'>
      <div className='card__img'>
        <img
          className='img'
          src={require('./image2.png')}
          alt={item.name} />
      </div>
      <div className="card__title">
        <p>{item.name}</p>
      </div>
      <div className="card__price">
        <p>${item.price}</p>
      </div>
      <div className="card__description">
        <div className="card__details">
          <div className="card__details-left">Screen</div>
          <div className="card__details-right">{item.screen}</div>
        </div>
        <div className="card__details">
          <div className="card__details-left">Capacity</div>
          <div className="card__details-right">{item.capacity}</div>
        </div>
        <div className="card__details">
          <div className="card__details-left">RAM</div>
          <div className="card__details-right">{item.ram}</div>
        </div>
        
      </div><div className="card__buttons">
          <button className='card__buttons-left' onClick={() => cart.add(item)}>Add to cart</button>
          <button className='card__buttons-right' onClick={() => {
            favourites.includes(item.id)
            ? favourites.remove(item.id)
            : favourites.add(item)
            }}>
            <div className="favourites">
              <img 
              src={favourites.includes(item.id) 
                ? require('./Favourites Filled (Heart Like).png')
                : require('./Favourites (Heart Like).png')}
                alt="Favoutites"
              />
            </div>
          </button>
        </div>
    </div>
  );
};
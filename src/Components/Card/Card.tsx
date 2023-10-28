import React from 'react';
import './card.scss';

export const Card: React.FC = () => {
  return (
    <div className='card'>
      <div className='card__img'>
        <img
          className='img'
          src={require('./image2.png')}
          alt="Apple iPhone 14 Pro 128GB Silver (MQ023)" />
      </div>
      <div className="card__title">
        <p>Apple iPhone 14 Pro 128GB Silver (MQ023)</p>
      </div>
      <div className="card__price">
        <p>$999</p>
      </div>
      <div className="card__description">
        <div className="card__details">
          <div className="card__details-left">Screen</div>
          <div className="card__details-right">6.1" OLED</div>
        </div>
        <div className="card__details">
          <div className="card__details-left">Capacity</div>
          <div className="card__details-right">128 GB</div>
        </div>
        <div className="card__details">
          <div className="card__details-left">RAM</div>
          <div className="card__details-right">6 GB</div>
        </div>
        
      </div><div className="card__buttons">
          <button className='card__buttons-left'>Add to cart</button>
          <button className='card__buttons-right'>
            <div className="favourites">
              <img 
                src={require('./Favourites (Heart Like).png')} 
                alt="Favoutites"
              />
            </div>
          </button>
        </div>
    </div>
  );
};
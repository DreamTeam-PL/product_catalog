
import React from 'react'
import './card.scss'
import { useStorageContext } from '../../Context/StorageContext'
import { Product } from '../../types/types'
import { useTranslation } from 'react-i18next'

export const Card: React.FC<{ item: Product }> = ({ item }) => {
  const { t } = useTranslation()
  const { cart } = useStorageContext()

  return (
    <div className='card'>
      <div className='card__img'>
        <img className='img' src={require('./image2.png')} alt={item.name} />
      </div>
      <div className='card__title'>
        <p>{item.name}</p>
      </div>
      <div className='card__price'>
        <p>${item.price}</p>
      </div>
      <div className='card__description'>
        <div className='card__details'>
          <div className='card__details-left'>{t('Screen')}</div>
          <div className='card__details-right'>{item.screen}</div>
        </div>
        <div className='card__details'>
          <div className='card__details-left'>Capacity</div>
          <div className='card__details-right'>{item.capacity}</div>
        </div>
        <div className='card__details'>
          <div className='card__details-left'>{t('RAM')}</div>
          <div className='card__details-right'>{item.ram}</div>
        </div>
      </div>
      <div className='card__buttons'>
        <button className='card__buttons-left' onClick={() => cart.add(item)}>
          {t('Add to cart')}
        </button>
        <button className='card__buttons-right'>
          <div className='favourites'>
            <img
              src={require('./Favourites (Heart Like).png')}
              alt='Favoutites'
            />
          </div>
        </button>
      </div>
    </div>
  )
}
=======
import React from 'react';
import './card.scss'; 
import { useStorageContext } from '../../Context/StorageContext';
import { Product } from '../../types/types';
import { Button } from '../Button/Button';

type Props = {
  item: Product;
  showDiscount?:boolean; 
}

export const Card: React.FC<Props> = ({ item, showDiscount=false }) => {
  const { cart, favourites } = useStorageContext(); 

  return (
    <article className='ProductCard'>
        <img
          className='ProductCard__image'
          src={require('./image2.png')}
          alt={item.name} 
        /> 

        <h3 className='ProductCard__title'>{item.name}</h3>
        
        <section className='ProductCard__price'>
          <span className='ProductCard__price-discount'>{item.price}</span>
          {showDiscount && <span className='ProductCard__price-full'>{item.fullPrice}</span>}
        </section>

        <hr className='ProductCard__line'/>

        <section className='ProductCard__info'>  
            <article className='ProductCard__infoColumn'>
              <span className='ProductCard__infoLabel'>Screen</span>
              <span className='ProductCard__infoValue'>{item.screen}</span>
            </article>
            
            <article className='ProductCard__infoColumn'>
              <span className='ProductCard__infoLabel'>Capacity</span>
              <span className='ProductCard__infoValue'>{item.capacity}</span>
            </article>
            
            <article className='ProductCard__infoColumn'>
              <span className='ProductCard__infoLabel'>RAM</span>
              <span className='ProductCard__infoValue'>{item.ram}</span>
            </article> 
        </section>

        <section className='ProductCard__actions'>
          <Button
            type={!cart.includes(item.id) ? 'color' : 'submited'}
            value={!cart.includes(item.id) ? 'Add to cart' : 'Added to cart'}
            className='ProductCard__submit'
            onClick={() => !cart.includes(item.id) && cart.add(item)}
          />

          <Button 
            type='circle'
            icon={favourites.includes(item.id) ? 'is-fav' : 'get-fav'} 
            onClick={() => !favourites.includes(item.id) ? favourites.add(item) : favourites.remove(item.id)}
          />
        </section>
    </article>
  );
};


import React from 'react'
import { Circle } from './Circle'
import { Capacity } from './Capacity'
import { FavIcon } from './FavIcon'
import './product.scss'

export const Product: React.FC = () => {
  return (
    <div className='phone__info'>
      <h1 className='phone__info-title'>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className='phone__info-container'>
        <div className='phone__info-photo-container'>
          <div className='phone__info-photo-content'>
            <img
              className='phone__info-phone-photo phone__infophone-photo-small'
              src={require('./images/prodsmall.png')}
              alt='Image'
            />
          </div>
          <div className='phone__info-photo-content'>
            <img
              className='phone__info-phone-photo phone__infophone-photo-small'
              src={require('./images/prodsmall.png')}
              alt='Image'
            />
          </div>
          <div className='phone__info-photo-content'>
            <img
              className='phone__info-phone-photo phone__infophone-photo-small'
              src={require('./images/prodsmall.png')}
              alt='Image'
            />
          </div>
          <div className='phone__info-photo-content'>
            <img
              className='phone__info-phone-photo phone__infophone-photo-small'
              src={require('./images/prodsmall.png')}
              alt='Image'
            />
          </div>
          <div className='phone__info-photo-content'>
            <img
              className='phone__info-phone-photo phone__infophone-photo-small'
              src={require('./images/prodsmall.png')}
              alt='Image'
            />
          </div>
        </div>
        <div>
          <img
            className='phone-photo phone-photo-small'
            src={require('./images/prodbig.png')}
            alt='Image'
          />
        </div>
        <div className='phone__info-main'>
          <div className='phone__info-main-colors'>
            <span className='phone__info-main-title'>Available colors</span>
            <div className='phone__info-main-circles'>
              <Circle fill='#FCDBC1' />
              <Circle fill='#5F7170' />
              <Circle fill='#4C4C4C' />
              <Circle fill='#F0F0F0' />
            </div>
          </div>
          <div className='phone__info-main-capacity'>
            <span className='phone__info-main-title'>Select capacity</span>
            <div className='phone__info-main-memory'>
              <Capacity value='64 GB' />
              <Capacity value='128 GB' />
              <Capacity value='256 GB' />
            </div>
          </div>

          <div className='phone__info-main-cta'>
            <span className='phone__info-main-price'>$799</span>
            <div className='phone__info-main-price-container'>
              <a className='phone__info-main-add-button' />
              <FavIcon fill='#F4BA47' border='#F4BA47' />
            </div>
          </div>

          <div className='phone__info-main-price'></div>
          <div className='phone__info-main-details'></div>
        </div>
      </div>
    </div>
  )
}

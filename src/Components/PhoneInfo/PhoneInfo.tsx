import React from 'react'
import { Circle } from './Circle'
import './phoneinfo.scss'
import { Capacity } from './Capacity'

export const PhoneInfo: React.FC = () => {
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
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
          </div>
          <div className='phone__info-photo-content'>
            <img
              className='phone__info-phone-photo phone__infophone-photo-small'
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
          </div>
          <div className='phone__info-photo-content'>
            <img
              className='phone__info-phone-photo phone__infophone-photo-small'
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
          </div>
          <div className='phone__info-photo-content'>
            <img
              className='phone__info-phone-photo phone__infophone-photo-small'
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
          </div>
          <div className='phone__info-photo-content'>
            <img
              className='phone__info-phone-photo phone__infophone-photo-small'
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
          </div>
        </div>
        <div>
          <img
            className='phone-photo phone-photo-small'
            src={require('../../Assets/Images/Iphone_11.png')}
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
              <Capacity value='64GB' />
              <Capacity value='128GB' />
              <Capacity value='256GB' />
            </div>
          </div>

          <div className='phone__info-main-price'></div>
          <div className='phone__info-main-details'></div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Circle } from './Circle'
import './phoneinfo.scss'
import { Capacity } from './Capacity'
import { FavIcon } from './favicon'

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

          <div className='phone__info-main-price-container'>
            <span className='phone__info-main-price'>$799</span>
            <s>$1199</s>
            <div className='phone__info-price-cta'>
              <a className='phone__info-button'>Add to cart </a>
              <FavIcon fill='#F4BA47' />
            </div>
          </div>
          <div className='phone__info-details'>
            <div className='phone__info-details-container'>
              <span className='phone__info-details-name'>Screen</span>
              <span className='phone__info-details-value'>6.5” OLED</span>
            </div>
            <div className='phone__info-details-container'>
              <span className='phone__info-details-name'>Resolution</span>
              <span className='phone__info-details-value'>2688x1242</span>
            </div>
            <div className='phone__info-details-container'>
              <span className='phone__info-details-name'>Processor</span>
              <span className='phone__info-details-value'>
                Apple A12 Bionic
              </span>
            </div>
            <div className='phone__info-details-container'>
              <span className='phone__info-details-name'>RAM</span>
              <span className='phone__info-details-value'>3 GB</span>
            </div>
          </div>
        </div>
        <div>
          <span className='phone__info-details-name'>ID: 802390</span>
        </div>
      </div>
      <div className='phone__info-description'>
        <div className='phone__info-description-about'>
          <h2 className='phone__info-description-title phone__info-description-title-about'>
            About
          </h2>
          <h3 className='phone__info-description-subtitle'>
            And then there was Pro
          </h3>
          <p className='phone__info-description-text'>
            A transformative triple‑camera system that adds tons of capability
            without complexity.<br></br> An unprecedented leap in battery life.
            And a mind‑blowing chip that doubles down on machine learning and
            pushes the boundaries of what a smartphone can do. Welcome to the
            first iPhone powerful enough to be called Pro.
          </p>

          <h3 className='phone__info-description-subtitle'>Camera</h3>
          <p className='phone__info-description-text'>
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone. Capture up to
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest‑quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </p>
          <h3 className='phone__info-description-subtitle'>
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h3>
          <p className='phone__info-description-text'>
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more creative
            control, too, with four times more scene and powerful new editing
            tools to play with.
          </p>
        </div>
        <div className='phone__info-description-name'>
          <h2 className='phone__info-description-title phone__info-description-title-tech'>
            Tech specs
          </h2>

          <div className='phone__info-details'>
            <div className='phone__info-details-container'>
              <span className='phone__info-details-name2'>Screen</span>
              <span className='phone__info-details-value2'>6.5” OLED</span>
            </div>
            <div className='phone__info-details-container'>
              <span className='phone__info-details-name2'>Resolution</span>
              <span className='phone__info-details-value2'>2688x1242</span>
            </div>
            <div className='phone__info-details-container'>
              <span className='phone__info-details-name2'>Processor</span>
              <span className='phone__info-details-value2'>
                Apple A12 Bionic
              </span>
            </div>
            <div className='phone__info-details-container'>
              <span className='phone__info-details-name2'>RAM</span>
              <span className='phone__info-details-value2'>3 GB</span>
            </div>
            <div className='phone__info-details'>
              <div className='phone__info-details-container'>
                <span className='phone__info-details-name2'>
                  Built in memory
                </span>
                <span className='phone__info-details-value2'>64 GB</span>
              </div>
              <div className='phone__info-details-container'>
                <span className='phone__info-details-name'>Camera</span>
                <span className='phone__info-details-value'>
                  12 Mp + 12 Mp + 12 Mp (Triple)
                </span>
              </div>
              <div className='phone__info-details-container'>
                <span className='phone__info-details-name'>Zoom</span>
                <span className='phone__info-details-value'>Optical, 2x </span>
              </div>
              <div className='phone__info-details-container'>
                <span className='phone__info-details-name'>Cell</span>
                <span className='phone__info-details-value'>
                  GSM, LTE, UMTS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

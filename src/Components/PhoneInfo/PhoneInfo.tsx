import React, { useEffect, useState } from 'react'
import { Circle } from './Circle'
import './phoneinfo.scss'
import { Capacity } from './Capacity'
import { FavIcon } from './favicon'
import { Cards } from '../Cards/Cards'
import '../../Pages/Catalog/catalog.scss'
import { ProductService } from '../../Api/Products'
import { useParams } from 'react-router-dom'
import { PhoneDetails } from '../../types/types'

export const PhoneInfo: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>()
  const [productData, setProductData] = useState<PhoneDetails | null>(null)

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (productSlug) {
          const product = await ProductService.getPhoneById(productSlug)
          setProductData(product)
        }
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error)
      }
    }

    fetchProductData()
  }, [productSlug])

  if (!productData) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div className='hmm3'>
        <div className='products__line'>
          <div className='products__position'>
            <div className='products__position-icon'>
              <img
                className='img'
                src={require('../../Pages/Catalog/home.png')}
                alt='Home'
              />
            </div>
            <div className='products__position-icon'>
              <img
                className='img'
                src={require('../../Pages/Catalog/arrow right.png')}
                alt='Right arrow direction'
              />
            </div>
            <p className='products__position-name'>Phones</p>
            <div className='products__position-icon'>
              <img
                className='img'
                src={require('../../Pages/Catalog/arrow right.png')}
                alt='Right arrow direction'
              />
            </div>
            <div className='products__position-name phone__name'>
              <p>{productData.name}</p>
            </div>
          </div>
        </div>
        <div className='back'>
          <div className='products__position-icon back__left'>
            <img
              className='img'
              src={require('../../Pages/Catalog/arrow left.png')}
              alt='Left arrow direction'
            />
          </div>
          <p className='back__writing'>back</p>
        </div>

        <div className='phone__info'>
          <h1 className='phone__info-title'>{productData.name}</h1>

          <section className='phones'>
            <div className='phones__left'>
              <div className='phones__left-photos'>
                {productData.images.slice(1).map((image, index) => (
                  <div className='phones__left-photos-frame' key={index}>
                    <img
                      className='phone__info-phone-photo phone__infophone-photo-small'
                      src={`https://phone-api-l15u.onrender.com/${image}`}
                      alt={productData.name}
                    />
                  </div>
                ))}
              </div>
              <div className='phones__left-photo'>
                <img
                  className='phone-photo phone-photo-small'
                  src={`https://phone-api-l15u.onrender.com/${productData.images[0]}`}
                  alt={productData.name}
                />
              </div>
            </div>

            <div className='phones__right'>
              <div className='phones__right-details'>
                <div className='phone__info-main-colors'>
                  <span className='phone__info-main-title'>
                    Available colors
                  </span>
                  <div className='phone__info-main-circles'>
                    {productData.colorsAvailable.map((color, index) => (
                      <Circle key={index} fill={color} />
                    ))}
                  </div>
                </div>
                <div className='phone__info-main-capacity'>
                  <span className='phone__info-main-title'>
                    Select capacity
                  </span>
                  <div className='phone__info-main-memory'>
                    {productData.capacityAvailable.map((capacity, index) => (
                      <Capacity key={index} value={capacity} />
                    ))}
                  </div>
                </div>
                <div className='phone__info-main-price-container'>
                  <span className='phone__info-main-price'>
                    ${productData.priceDiscount}
                  </span>
                  <s>${productData.priceRegular}</s>
                  <div className='phone__info-price-cta'>
                    <a className='phone__info-button'>Add to cart </a>
                    <FavIcon fill='#F4BA47' />
                  </div>
                </div>
                <div className='phone__info-details'>
                  <div className='phone__info-details-container'>
                    <span className='phone__info-details-name'>Screen</span>
                    <span className='phone__info-details-value'>
                      {productData.screen}
                    </span>
                  </div>
                  <div className='phone__info-details-container'>
                    <span className='phone__info-details-name'>Resolution</span>
                    <span className='phone__info-details-value'>
                      {productData.resolution}
                    </span>
                  </div>
                  <div className='phone__info-details-container'>
                    <span className='phone__info-details-name'>Processor</span>
                    <span className='phone__info-details-value'>
                      {productData.processor}
                    </span>
                  </div>
                  <div className='phone__info-details-container'>
                    <span className='phone__info-details-name'>RAM</span>
                    <span className='phone__info-details-value'>
                      {productData.ram}
                    </span>
                  </div>
                </div>
              </div>

              <div className='phones__right-id'>
                <p className='phones__right-id-number'>ID: 802390</p>
              </div>
            </div>
          </section>

          <section className='phones2'>
            <div className='description__left'>
              <h2 className='phone__info-description-title phone__info-description-title-about'>
                About
              </h2>
              {productData.description.map((section, index) => (
                <div key={index}>
                  <h3 className='phone__info-description-subtitle'>
                    {section.title}
                  </h3>
                  {section.text.map((paragraph, pIndex) => (
                    <p key={pIndex} className='phone__info-description-text'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className='description__right'>
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
                    <span className='phone__info-details-value'>
                      Optical, 2x{' '}
                    </span>
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
          </section>
        </div>
      </div>
      <Cards type={'newest'} />
    </>
  )
}

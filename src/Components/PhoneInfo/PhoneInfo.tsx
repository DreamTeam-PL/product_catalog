import React, { useEffect, useState } from 'react'
import { Circle } from './Circle'
import './phoneinfo.scss'
import { Capacity } from './Capacity'
import { CardsWidget } from '../Cards/Cards'
import '../../Pages/Catalog/catalog.scss'
import { ProductService } from '../../Api/Products'
import { Link, useParams } from 'react-router-dom'

import { PhoneDetails, Product } from '../../types/types'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { useStorageContext } from '../../Context/StorageContext'
import { Button } from '../Button/Button'

export const PhoneInfo: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>()
  const [productData, setProductData] = useState<PhoneDetails | null>(null)
  const [productDataWithoutDetails, setProductDataWithoutDetails] =
    useState<Product>()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeColor, setActiveColor] = useState<string | null>(null)
  const [activeCapacity, setActiveCapacity] = useState('')

  const { cart, favourites } = useStorageContext()

  const colorMap: { [key: string]: string } = {
    gold: '#FFD700',
    gray: '#808080',
    black: '#000200',
    silver: '#C0C0C0',
    midnightgreen: '#004953',
    spacegray: '#4B6382',
    white: '#F5F5DC',
    yellow: '#F4BA47',
    red: '#EB5757',
    coral: '#FF6F61',
    rosegold: '#B76E79',
    purple: '#800080',
    green: '#27AE60',
  }

  const extractSlugWithoutColor = (productSlug: string) => {
    const parts = productSlug.split('-')
    if (parts.length > 1) {
      parts.pop()
      return parts.join('-')
    } else {
      return productSlug
    }
  }

  const slugWithoutColor = productSlug
    ? extractSlugWithoutColor(productSlug)
    : 'white'

  const extractSlugWithoutCapacity = (productSlug: string) => {
    const parts = productSlug.split('-')

    for (let i = parts.length - 1; i >= 0; i--) {
      if (isNaN(Number(parts[i]))) {
        break
      }
      parts.pop()
    }

    return parts.join('-')
  }

  const slugWithoutCapacity = productSlug
    ? extractSlugWithoutCapacity(productSlug)
    : '64GB'

  useEffect(() => {
    const fetchProductData = async () => {
      if (productSlug === undefined) {
        return
      }
      try {
        if (productSlug) {
          const product = await ProductService.getPhoneById(productSlug)
          setProductData(product)
          const productWithoutDetails =
            await ProductService.getPhoneByIdWithoutDetails(productSlug)
          setProductDataWithoutDetails(productWithoutDetails)
        }
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error)
      }
    }

    fetchProductData()
  }, [productSlug])

  const changeSelectedImage = (index: number) => {
    setSelectedImageIndex(index)
  }

  if (!productData) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div className='hmm3'>
        <div className='products__line'>
          <div className='products__position'>
            <Breadcrumbs />
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
                {productData.images.slice(1, 5).map((image, index) => (
                  <div
                    className='phones__left-photos-frame'
                    key={index}
                    onClick={() => changeSelectedImage(index + 1)}
                  >
                    <img
                      className='phone__info-phone-photo phone__info-phone-photo-small'
                      src={`https://phone-api-l15u.onrender.com/${image}`}
                      alt={productData.name}
                    />
                  </div>
                ))}
              </div>
              <div className='phones__left-photo'>
                <img
                  className='phone-photo phone-photo-large'
                  src={`https://phone-api-l15u.onrender.com/${productData.images[selectedImageIndex]}`}
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
                      <Link
                        key={index}
                        to={`/phones/${slugWithoutColor}-${color}  `}
                        style={{ textDecoration: 'none' }}
                      >
                        <Circle
                          fill={colorMap[color] || '#000000'}
                          color={color}
                          activeColor={activeColor}
                          setActiveColor={setActiveColor}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className='phone__info-main-capacity'>
                  <span className='phone__info-main-title'>
                    Select capacity
                  </span>
                  <div className='phone__info-main-memory'>
                    {productData.capacityAvailable.map((capacity, index) => {
                      const parts = slugWithoutCapacity.split('-')
                      parts[parts.length - 2] = capacity.toLowerCase()
                      const newSlug = parts.join('-')

                      return (
                        <Link
                          key={index}
                          to={`/phones/${newSlug}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <Capacity
                            value={capacity}
                            isActive={capacity === activeCapacity}
                            onClick={() => setActiveCapacity(capacity)}
                          />
                        </Link>
                      )
                    })}
                  </div>
                </div>
                <div className='phone__info-main-price-container'>
                  <span className='phone__info-main-price'>
                    ${productData.priceDiscount}
                  </span>
                  <s className='phone__info-main-oldprice'>
                    ${productData.priceRegular}
                  </s>
                  <div className='phone__info-price-cta'>
                    {productDataWithoutDetails && (
                      <>
                        <Button
                          className='phone__info-button'
                          type={
                            !cart.includes(productDataWithoutDetails.id)
                              ? 'color'
                              : 'submited'
                          }
                          value={
                            !cart.includes(productDataWithoutDetails.id)
                              ? 'Add to cart'
                              : 'Added to cart'
                          }
                          onClick={() => {
                            if (!cart.includes(productDataWithoutDetails.id)) {
                              cart.add(productDataWithoutDetails)
                            }
                          }}
                        />

                        <Button
                          type='circle'
                          icon={
                            favourites.includes(productDataWithoutDetails.id)
                              ? 'is-fav'
                              : 'get-fav'
                          }
                          className='phone__info-button--fav'
                          onClick={() =>
                            !favourites.includes(
                              productDataWithoutDetails.id
                            ) && productDataWithoutDetails
                              ? favourites.add(productDataWithoutDetails)
                              : favourites.remove(productDataWithoutDetails.id)
                          }
                        />
                      </>
                    )}
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
                  <span className='phone__info-details-value2'>
                    {productData.screen}
                  </span>
                </div>
                <div className='phone__info-details-container'>
                  <span className='phone__info-details-name2'>Resolution</span>
                  <span className='phone__info-details-value2'>
                    {productData.resolution}
                  </span>
                </div>
                <div className='phone__info-details-container'>
                  <span className='phone__info-details-name2'>Processor</span>
                  <span className='phone__info-details-value2'>
                    {productData.processor}
                  </span>
                </div>
                <div className='phone__info-details-container'>
                  <span className='phone__info-details-name2'>RAM</span>
                  <span className='phone__info-details-value2'>
                    {productData.ram}
                  </span>
                </div>
                <div className='phone__info-details'>
                  <div className='phone__info-details-container'>
                    <span className='phone__info-details-name2'>
                      Built in memory
                    </span>
                    <span className='phone__info-details-value2'>
                      {productData.capacity}
                    </span>
                  </div>
                  <div className='phone__info-details-container'>
                    <span className='phone__info-details-name'>Camera</span>
                    <span className='phone__info-details-value'>
                      {productData.camera}
                    </span>
                  </div>
                  <div className='phone__info-details-container'>
                    <span className='phone__info-details-name'>Zoom</span>
                    <span className='phone__info-details-value'>
                      {productData.zoom}
                    </span>
                  </div>
                  <div className='phone__info-details-container'>
                    <span className='phone__info-details-name'>Cell</span>
                    <span className='phone__info-details-value'>
                      <span className='phone__info-details-value'>
                        {productData.cell.join(', ')}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <CardsWidget
        title='You may also like'
        requestServer={ProductService.getNewest}
      />
    </>
  )
}

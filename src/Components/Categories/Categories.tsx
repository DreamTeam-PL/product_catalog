import React, { useEffect, useState } from 'react'
import './categories.scss'
import { Category } from '../Category/Category';
import { ProductService } from '../../Api/Products';

const categories = [
  {
    title: 'Mobile phones',
    productType: 'phones',
  },
  {
    title: 'Tablets',
    productType: 'tablets',
  },
  {
    title: 'Accessories',
    productType: 'accessories',
  }
]

export const Categories: React.FC = () => {
  const [phoneCount, setPhoneCount] = useState(0);
  useEffect(() => {
    ProductService.getProducts({})
      .then((respons) => setPhoneCount(respons.count))
  }, [])

  return (
  <section className='categories'>
    <h2 className='landing__sub-title'>Shop by category</h2>
    <div className='categories__blocks'>
      {categories.map((category) => {
        const count = category.title === 'Mobile phones' ? phoneCount : 0;

        return <Category title={category.title} productType={category.productType} key={category.productType} count={count}/>})
      }
    </div>
  </section>
  )
}

import React from 'react'
import './categories.scss'
import { Category } from '../Category/Category';

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
  return (
  <section className='categories'>
    <h2 className='landing__sub-title'>Shop by category</h2>
    <div className='categories__blocks'>
      {categories.map((category) => <Category title={category.title} productType={category.productType}/>)}
    </div>
  </section>
  )
}

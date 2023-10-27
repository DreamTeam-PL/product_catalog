import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Catalog } from '../Pages/Catalog'
import { Product } from '../Pages/Product/Product'
import { Cart } from '../Pages/Cart'
import { Favourites } from '../Pages/Favourites'

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Navigate to='/' />} />
      <Route path='/catalog' element={<Catalog />}>
        <Route path=':productType' element={<Catalog />} />
      </Route>
      <Route path='/product' element={<Product />}>
        <Route path=':productSlug' element={<Product />} />
      </Route>
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

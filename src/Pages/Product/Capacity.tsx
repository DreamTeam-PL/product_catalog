import React from 'react'
import './product.scss'

interface CapacityProps {
  value: string
}

export const Capacity: React.FC<CapacityProps> = ({ value }) => {
  return <a className='phone__info-main-memory--capacity'>{value}</a>
}

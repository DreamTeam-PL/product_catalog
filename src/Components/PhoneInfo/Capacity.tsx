import React, { useState } from 'react'
import './phoneinfo.scss'

interface CapacityProps {
  value: string
  isActive: boolean
  onClick: () => void
}

export const Capacity: React.FC<CapacityProps> = ({
  value,
  isActive,
  onClick,
}) => {
  return (
    <a
      className={`phone__info-main-memory--capacity ${
        isActive ? 'phone__info-main-capacity-active' : ''
      }`}
      onClick={onClick}
    >
      {value}
    </a>
  )
}

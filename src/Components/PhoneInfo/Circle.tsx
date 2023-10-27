import React from 'react'
import './phoneinfo.scss'

interface CircleProps {
  fill: string
}

export const Circle: React.FC<CircleProps> = ({ fill }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
    >
      <rect
        x='2'
        y='2'
        width='28'
        height='28'
        rx='14'
        fill={fill}
        stroke='white'
        stroke-width='2'
      />
      <rect x='0.5' y='0.5' width='31' height='31' rx='15.5' stroke='#0F0F11' />
    </svg>
  )
}

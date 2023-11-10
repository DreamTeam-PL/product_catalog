interface CircleProps {
  fill: string
  color: string
  activeColor: string | null
  setActiveColor: (color: string | null) => void
}

export const Circle: React.FC<CircleProps> = ({
  fill,
  color,
  activeColor,
  setActiveColor,
}) => {
  const isColorActive = activeColor === color

  const handleCircleClick = () => {
    if (isColorActive) {
      setActiveColor(null)
    } else {
      setActiveColor(color)
    }
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      className={`circle-svg ${isColorActive ? 'active' : ''}`}
      onClick={handleCircleClick}
    >
      <rect x='4' y='4' width='24' height='24' rx='12' fill={fill} />
      <rect
        className='circle-rect'
        x='0.5'
        y='0.5'
        width='31'
        height='31'
        rx='15.5'
        stroke='#E2E6E9'
      />
    </svg>
  )
}

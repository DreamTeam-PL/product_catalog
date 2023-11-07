import React, { useState, useEffect, useRef } from 'react'
import './Slider.scss'
import { Link } from 'react-router-dom'

export const Slider: React.FC = () => {
  const [selected, setSelected] = useState<number>(1)
  const [isTransitioning, setTransitioning] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const [sliderClass, setSliderClass] = useState('slider')

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true)
      setSliderClass('slider slider--exiting')
      setTimeout(() => {
        setSelected((current) => (current < 3 ? current + 1 : 1))
        setTransitioning(false)
        setSliderClass('slider slider--entering')
        setTimeout(() => {
          setSliderClass('slider')
        }, 500)
      }, 500)
    }, 10000)

    return () => {
      clearInterval(timer)
    }
  }, [selected])

  const handlePrevClick = () => {
    setTransitioning(true)
    setSliderClass('slider slider--exiting')

    setTimeout(() => {
      setSelected((current) => (current > 1 ? current - 1 : 3))
      setSliderClass('slider slider--entering')

      setTimeout(() => {
        setSliderClass('slider')
        setTransitioning(false)
      }, 500)
    }, 500)
  }

  const handleNextClick = () => {
    setTransitioning(true)
    setSliderClass('slider slider--exiting')

    setTimeout(() => {
      setSelected((current) => (current < 3 ? current + 1 : 1))
      setSliderClass('slider slider--entering')

      setTimeout(() => {
        setSliderClass('slider')
        setTransitioning(false)
      }, 500)
    }, 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const distance = touchEndX.current - touchStartX.current

    if (distance > 50) {
      handlePrevClick()
    } else if (distance < -50) {
      handleNextClick()
    }
  }

  return (
    <section
      className={sliderClass}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <a
        className='slider__button slider__button--prev'
        onClick={handlePrevClick}
      ></a>
      <main
        className={`slider__main slider__main--active-${selected}${
          isTransitioning ? ' transitioning' : ''
        }`}
      >
        <Link to={`/phones/${selected}`}>
          <picture className='slider__picture'>
            <source
              media='(max-width: 639px)'
              srcSet={require(`./image_small${selected}.png`)}
            />
            <img
              className='slider__image'
              src={require(`./image_big${selected}.png`)}
              alt={`img${selected}`}
            />
          </picture>
        </Link>
      </main>
      <a
        className='slider__button slider__button--next'
        onClick={handleNextClick}
      ></a>
    </section>
  )
}

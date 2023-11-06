import React, { useState, useEffect } from 'react'
import './Slider.scss'
import { Link } from 'react-router-dom'

export const Slider: React.FC = () => {
  const [selected, setSelected] = useState<number>(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setSelected((current) => (current < 3 ? current + 1 : 1))
    }, 10000)

    return () => {
      clearInterval(timer)
    }
  }, [selected])

  const handlePrevClick = () => {
    setSelected((current) => (current > 1 ? current - 1 : 3))
  }

  const handleNextClick = () => {
    setSelected((current) => (current < 3 ? current + 1 : 1))
  }

  return (
    <section className={`slider slider--active-${selected}`}>
      <a
        className='slider__button slider__button--prev'
        onClick={handlePrevClick}
      ></a>
      <main className={`slider__main slider__main--active-${selected}`}>
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

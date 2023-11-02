/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './Slider.scss'; 
import { Link } from 'react-router-dom';


export const Slider:React.FC = () => {
    const [selected, setSelected] = useState<number>(1);

    return (
    <section className={`slider slider--active-${selected}`}>
        <a className='slider__button slider__button--prev'
            onClick={() => setSelected(current => current > 1 ? current - 1 : 3)}
        > </a>
        <main className={`slider__main slider__main--active-${selected}`}> 
            <Link to="/phones/1">
                <picture className="slider__picture">
                    <source
                        media="(max-width: 639px)"
                        srcSet={require('./image_small.png')}
                    />
                    <img
                        className='slider__image'
                        src={require('./image_big.png')}
                        alt="img1"
                    />
                </picture>
            </Link>
        </main>
        <a className='slider__button slider__button--next'
        onClick={() => setSelected(current => current < 3 ? current + 1 : 1)}
        > </a>
    </section>);
}
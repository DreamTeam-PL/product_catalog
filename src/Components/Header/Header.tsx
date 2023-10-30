import './header.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const [isMobileVersion, setMobileVersion] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navigateTo = (path: string) => {
    navigate(path);
    setMobileVersion(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setMobileVersion(true);
      } else {
        setMobileVersion(false);
      };
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" id="home">
      <div className='header__logo' onClick={() => navigateTo('/')}>
      </div>
      {isMobileVersion && 
        <div className='burger__icon' onClick={() => toggleMenu()}>
        </div>
      }
      {!isMobileVersion && 
      <>
      <ul className="nav__list">
          <li className="nav__item" onClick={() => navigateTo('/')}>
            <div className="nav__div">HOME</div>
          </li>
          <li className="nav__item" onClick={() => navigateTo('/phones')}>
            <div className="nav__div">PHONES</div>
          </li>
          <li className="nav__item" onClick={() => navigateTo('/tablets')}>
            <div className="nav__div">TABLETS</div>
          </li>
          <li className="nav__item" onClick={() => navigateTo('/accesories')}>
            <div className="nav__div">ACCESORIES</div>
          </li>
        </ul>
        <div className='header__buttons'>
            <button title='buttonHeart' className='button__heart'></button>
            <button title='buttonCart' className='button__cart' onClick={() => navigateTo('/cart')}></button>
        </div>
      </>
    }
    </header>
  );
}

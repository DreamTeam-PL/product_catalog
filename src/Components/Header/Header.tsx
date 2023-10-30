import './header.scss';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

export function Header() {
  const navigate = useNavigate();
  const [isMobileVersion, setMobileVersion] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(location.pathname);

  const navigateTo = (path: string) => {
    navigate(path);
    if (isMobileVersion) {
      setMenuOpen(false);
    }
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

      {isMobileVersion && isMenuOpen && (
        <div className="mobile-menu">
          <div className='header__menu'>
            <div className='header__logo' onClick={() => toggleMenu()}>
            </div>
            <button
              title='buttonClose'
              className='close__button'
              onClick={() => toggleMenu()}
            ></button>
          </div>
          <ul className="mobile-menu__list">
            <li
              className={classNames('mobile-menu__item', {
                'menu-item__isActive': currentPath === '/',
              })}
              onClick={() => navigateTo('/home')}
            >HOME</li>
            <li
              className={classNames('mobile-menu__item', {
                'menu-item__isActive': currentPath === '/phones',
              })}
              onClick={() => navigateTo('/phones')}
            >PHONES</li>
            <li
              className={classNames('mobile-menu__item', {
                'menu-item__isActive': currentPath === '/tablets',
              })}
              onClick={() => navigateTo('/tablets')}
            >TABLETS</li>
            <li
              className={classNames('mobile-menu__item', {
                'menu-item__isActive': currentPath === '/accesories',
              })}
              onClick={() => navigateTo('/accesories')}
            >ACCESORIES</li>
          </ul>
          <div className='header-buttons__menu'>
            <button
              title='buttonHeart'
              className={classNames('button-heart__menu', {
                'button__isActive': currentPath === '/favourites',
              })}
              onClick={() => navigateTo('/favourites')}
            ></button>
            <button
              title='buttonCart'
              className={classNames('button-cart__menu', {
                'button__isActive': currentPath === '/cart',
              })}
              onClick={() => navigateTo('/cart')}
            ></button>
          </div>
        </div>
      )}

      {!isMobileVersion &&
        <>
          <ul className="nav__list">
            <li
              className={classNames('nav__item', {
                'nav-item__isActive': currentPath === '/',
              })}
              onClick={() => navigateTo('/')}
            >
              <div className="nav__div">HOME</div>
            </li>
            <li
              className={classNames('nav__item', {
                'nav-item__isActive': currentPath === '/phones',
              })}
              onClick={() => navigateTo('/phones')}
            >
              <div className="nav__div">PHONES</div>
            </li>
            <li
              className={classNames('nav__item', {
                'nav-item__isActive': currentPath === '/tablets',
              })}
              onClick={() => navigateTo('/tablets')}
            >
              <div className="nav__div">TABLETS</div>
            </li>
            <li
              className={classNames('nav__item', {
                'nav-item__isActive': currentPath === '/accesories',
              })}
              onClick={() => navigateTo('/accesories')}
            >
              <div className="nav__div">ACCESORIES</div>
            </li>
          </ul>
          <div className='header__buttons'>
            <button
              title='buttonHeart'
              className={classNames('button__heart', {
                'button__isActive': currentPath === '/favourites',
              })}
              onClick={() => navigateTo('/favourites')}
            ></button>
            <button
              title='buttonCart'
              className={classNames('button__cart', {
                'button__isActive': currentPath === '/cart',
              })}
              onClick={() => navigateTo('/cart')}
            ></button>
          </div>
        </>
      }
    </header>
  );
}

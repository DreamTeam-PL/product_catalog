import './header.scss'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export function Header() {
  const navigate = useNavigate()
  const [isMobileVersion, setMobileVersion] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const currentPath = location.pathname

  const navigateTo = (path: string) => {
    navigate(path)
    if (isMobileVersion) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setMobileVersion(true)
      } else {
        setMobileVersion(false)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  const handleLanguageMenuToggle = () => {
    const languageDropdown = document.querySelector('.language-dropdown')
    languageDropdown?.classList.toggle('open')
  }

  const handleLanguageSelect = (language: string) => {
    handleLanguageChange(language)
    handleLanguageMenuToggle()
  }

  return (
    <header className='header' id='home'>
      <div className='header__logo' onClick={() => navigateTo('/')}></div>
      {isMobileVersion && (
        <div className='burger__icon' onClick={() => toggleMenu()}></div>
      )}

      {isMobileVersion && isMenuOpen && (
        <div className='mobile-menu'>
          <div className='header__menu'>
            <div className='header__logo' onClick={() => toggleMenu()}></div>
            <button
              title='buttonClose'
              className='close__button'
              onClick={() => toggleMenu()}
            ></button>
          </div>
          <ul className='mobile-menu__list'>
            <li
              className={classNames('mobile-menu__item', {
                'menu-item__isActive': currentPath === '/',
              })}
              onClick={() => navigateTo('/home')}
            >
              {t('header.home')}
            </li>
            <li
              className={classNames('mobile-menu__item', {
                'menu-item__isActive': currentPath === '/phones',
              })}
              onClick={() => navigateTo('/phones')}
            >
              {t('header.phones')}
            </li>
            <li
              className={classNames('mobile-menu__item', {
                'menu-item__isActive': currentPath === '/tablets',
              })}
              onClick={() => navigateTo('/tablets')}
            >
              {t('header.tablets')}
            </li>
            <li
              className={classNames('mobile-menu__item', {
                'menu-item__isActive': currentPath === '/accesories',
              })}
              onClick={() => navigateTo('/accesories')}
            >
              {t('header.accessories')}
            </li>
          </ul>
          <div className='header-buttons__menu'>
            <button
              title='buttonHeart'
              className={classNames('button-heart__menu', {
                button__isActive: currentPath === '/favourites',
              })}
              onClick={() => navigateTo('/favourites')}
            ></button>
            <button
              title='buttonCart'
              className={classNames('button-cart__menu', {
                button__isActive: currentPath === '/cart',
              })}
              onClick={() => navigateTo('/cart')}
            ></button>
          </div>
        </div>
      )}

      {!isMobileVersion && (
        <>
          <ul className='nav__list'>
            <li
              className={classNames('nav__item', {
                'nav-item__isActive': currentPath === '/',
              })}
              onClick={() => navigateTo('/')}
            >
              <div className='nav__div'> {t('header.home')}</div>
            </li>
            <li
              className={classNames('nav__item', {
                'nav-item__isActive': currentPath === '/phones',
              })}
              onClick={() => navigateTo('/phones')}
            >
              <div className='nav__div'> {t('header.phones')}</div>
            </li>
            <li
              className={classNames('nav__item', {
                'nav-item__isActive': currentPath === '/tablets',
              })}
              onClick={() => navigateTo('/tablets')}
            >
              <div className='nav__div'> {t('header.tablets')}</div>
            </li>
            <li
              className={classNames('nav__item', {
                'nav-item__isActive': currentPath === '/accesories',
              })}
              onClick={() => navigateTo('/accesories')}
            >
              <div className='nav__div'> {t('header.accessories')}</div>
            </li>
          </ul>

          <div className='header__buttons'>
            <div
              className={classNames('language-dropdown', { open: isMenuOpen })}
            >
              <button
                className='language-button'
                onClick={() => handleLanguageMenuToggle()}
              >
                {currentLanguage === 'en' && (
                  <img
                    src={require('./england.png')}
                    alt='English flag'
                    width='30px'
                    height='20px'
                  />
                )}
                {currentLanguage === 'pl' && (
                  <img
                    src={require('./poland.png')}
                    alt='Polish flag'
                    width='30px'
                    height='20px'
                  />
                )}
                {currentLanguage === 'es' && (
                  <img
                    src={require('./spain.png')}
                    alt='Spanish flag'
                    width='30px'
                    height='20px'
                  />
                )}
                {currentLanguage === 'de' && (
                  <img
                    src={require('./germany.png')}
                    alt='German flag'
                    width='30px'
                    height='20px'
                  />
                )}
                <span>{currentLanguage.toUpperCase()}</span>
              </button>
              <ul className='language-menu'>
                <li onClick={() => handleLanguageSelect('en')}>
                  <img
                    src={require('./england.png')}
                    alt='English flag'
                    width='30px'
                    height='20px'
                  />
                  EN
                </li>
                <li onClick={() => handleLanguageSelect('pl')}>
                  <img
                    src={require('./poland.png')}
                    alt='Polish flag'
                    width='30px'
                    height='20px'
                  />
                  PL
                </li>
                <li onClick={() => handleLanguageSelect('es')}>
                  <img
                    src={require('./spain.png')}
                    alt='Spanish flag'
                    width='30px'
                    height='20px'
                  />
                  ES
                </li>
                <li onClick={() => handleLanguageSelect('de')}>
                  <img
                    src={require('./germany.png')}
                    alt='German flag'
                    width='30px'
                    height='20px'
                  />
                  DE
                </li>
              </ul>
            </div>
            <button
              title='buttonHeart'
              className={classNames('button__heart', {
                button__isActive: currentPath === '/favourites',
              })}
              onClick={() => navigateTo('/favourites')}
            ></button>
            <button
              title='buttonCart'
              className={classNames('button__cart', {
                button__isActive: currentPath === '/cart',
              })}
              onClick={() => navigateTo('/cart')}
            ></button>
          </div>
        </>
      )}
    </header>
  )
}

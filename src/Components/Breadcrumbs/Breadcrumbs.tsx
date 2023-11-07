import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.scss'

export const Breadcrumbs = () => {
  const location = useLocation();
  const [icons, setIcons] = useState<string[]>([]);
  const [isLoading, setIsloadnig] = useState(true);

  useEffect(() => {
    const iconPaths = ['./icons/home.svg', './icons/next-disabled.svg']

    Promise.all(
      iconPaths.map((path) => import(`${path}`)
        .then((module) => module.default))
    )
      .then((loadedIcons) => setIcons(loadedIcons))
      .catch((err) => console.log('Error',err))
      .finally(() => setIsloadnig(false))
  }, []);

  let currnetLink = '';

  const crumbs = location.pathname.split('/')
  .filter((crumb) => crumb !== '')
  .map((crumb, index, array) => {
    currnetLink += `/${crumb}`

    if (array.length - 1 === index) {
      return (
        <React.Fragment key={crumb}>
            <img
              className='breadcrumb__icon'
              src={icons[1]}
              alt="" 
            />
          <p className='breadcrumb__text'>{crumb}</p>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment key={crumb}>
          <img
            className='breadcrumb__icon'
            src={icons[1]}
            alt="" 
          />
        <Link to={currnetLink} className="breadcrumb__link">{crumb}</Link>
      </React.Fragment>
    )
  })

  return (
    <>
      {isLoading || 
      <div className="breadcrumb">
        <Link to={'/home'} className="breadcrumb__link">
          <img
            className='breadcrumb__icon'
            src={icons[0]}
            alt="Home" />
        </Link>
        {crumbs}
      </div>}
    </>
  )
}

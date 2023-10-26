import React from 'react'
import './phoneinfo.scss'

export const PhoneInfo: React.FC = () => {
  return (
    <div className='phone-info'>
      <h1 className='phone-info-title'>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div>
        <div className='phone-info-container'>
          <div>
            <img
              className=''
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
            <img
              className=''
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
            <img
              className=''
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
            <img
              className=''
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
            <img
              className=''
              src={require('../../Assets/Images/Iphone11.png')}
              alt='Image'
            />
          </div>
          <div>
            <img
              className=''
              src={require('../../Assets/Images/Iphone_11.png')}
              alt='Image'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

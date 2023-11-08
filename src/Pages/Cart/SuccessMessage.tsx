import './SuccessMessage.scss'
import { useTranslation } from 'react-i18next'

export const SuccessMessage = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1 className='success__Message'>{t('successMessage.message')}</h1>
      <div className='success-animation'>
        <svg
          className='checkmark'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 52 52'
        >
          <circle
            className='checkmark__circle'
            cx='26'
            cy='26'
            r='25'
            fill='none'
          />
          <path
            className='checkmark__check'
            fill='none'
            d='M14.1 27.2l7.1 7.2 16.7-16.8'
          />
        </svg>
        <p className='redirect'>{t('successMessage.redirect')}</p>
      </div>
    </>
  )
}

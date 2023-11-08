import { Categories } from '../Components/Categories/Categories'
import { Slider } from '../Components/Slider/Slider'
import { useTranslation } from 'react-i18next'
import { Cards } from '../Components/Cards/Cards'

import './Home.scss'

export const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className='content landing'>
      <h1 className='landing__title'>{t('home.welcome')}</h1>
      <main className='main'>
        <Slider />
        <Cards type='newest' />
        <Categories />
        <Cards type='discount' />
      </main>
    </section>
  )
}

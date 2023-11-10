import { Categories } from '../Components/Categories/Categories'
import { Slider } from '../Components/Slider/Slider'
import { useTranslation } from 'react-i18next'
import { CardsWidget } from '../Components/Cards/Cards'

import './Home.scss'
import { ProductService } from '../Api/Products'

export const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className=' landing'>
      <h1 className='landing__title'>{t('home.welcome')}</h1>
      <main className='main'>
        <Slider />
        <CardsWidget
          title='Brand new models'
          requestServer={ProductService.getNewest}
        />
        <Categories />
        <CardsWidget
          title='Hot prices'
          requestServer={ProductService.getDiscounted}
        />
      </main>
    </section>
  )
}

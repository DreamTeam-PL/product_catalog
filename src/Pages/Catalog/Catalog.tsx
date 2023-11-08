// import { Button } from '../../Components/Button/Button'
// import { Card } from '../../Components/Card/Card'
// import { Pagination } from '../../Components/Pagination/Pagination'
// import { ProductService } from '../../Api/Products'
// import './catalog.scss'
// import { useEffect, useState } from 'react'
// import { Product } from '../../types/types'
// import { DropDownSelect } from '../../Components/DropDownSelect/DropDownSelect'
// import { useTranslation } from 'react-i18next'

// export const Catalog: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([])
//   const [perPage, setPerPage] = useState<number>(16)
//   const { t } = useTranslation()

//   useEffect(() => {
//     ProductService.getProducts()
//       .then((pr: Product[]) => setProducts(pr))
//       .catch((errr) => console.error('Error', errr))
//   }, [products])

//   return (
//     <section className='hmm products'>
//       <div className='products__position'>
//         <div className='products__position-icon'>
//           <img className='img' src={require('./home.png')} alt='Home' />
//         </div>
//         <div className='products__position-icon'>
//           <img
//             className='img'
//             src={require('./arrow right.png')}
//             alt='Right arrow direction'
//           />
//         </div>
//         <p className='products__position-name'>Phones</p>
//       </div>
//       <h1 className='products__title'>{t('catalog.title')}</h1>
//       <p className='products__quantity'>
//         {t('catalog.quantity', { count: 95 })}
//       </p>
//       <div className='products__filter'>
//         <div className='products__filter-filter'>
//           <div className='products__filter-filter-name'>
//             <p>{t('catalog.sortBy')}</p>
//           </div>
//           <div className='products__filter-filter-button'>
//             <DropDownSelect
//               options={['Najnowsze', 'Najstarsze', 'Najdroższe', 'Najtańsze']}
//               onChange={(option: number) => null}
//             />
//           </div>
//         </div>
//         <div className='products__filter-filter'>
//           <div className='products__filter-filter-name'>
//             <p>{t('catalog.itemsOnPage')}</p>
//           </div>
//           <div className='products__filter-filter-button'>
//             <DropDownSelect
//               options={['16', '32', '63']}
//               onChange={(option: number) => setPerPage(option)}
//             />
//           </div>
//         </div>
//       </div>
//       <div className='products__catalog'>
//         {products.map((product) => (
//           <Card key={product.id} item={product} />
//         ))}
//       </div>
//       <div className='products__buttons'>
//         <Pagination />
//       </div>
//     </section>
//   )
// }
// =======
import { Button } from '../../Components/Button/Button'
import { Card } from '../../Components/Card/Card'
import { Pagination } from '../../Components/Pagination/Pagination'
import { ProductService } from '../../Api/Products'
import './catalog.scss'
import { useEffect, useState } from 'react'
import { Product } from '../../types/types'
import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs'
import { DropDownSelect } from '../../Components/DropDownSelect/DropDownSelect'
import { ProductCatalog } from '../../Components/ProductCatalog/ProductCatalog'
import { useCatalog } from './useCatalog'
import { PER_PAGE_OPTIONS, SORT_TYPES } from '../../utils/Constants'
import { Loader } from '../../Components/Loader/Loader'

export const Catalog: React.FC = () => {
  const { resultCount, products, limit, sort, order, updateSearchParams } =
    useCatalog()

  return (
    <section className='catalog'>
      <Breadcrumbs />

      {!products && <Loader />}

      {products && products.length === 0 && (
        <p>There is no products for you..</p>
      )}

      {products && (
        <ProductCatalog
          products={products}
          filters={[
            {
              label: 'Sort by',
              options: SORT_TYPES.map((e) => e.title),
              onChange: (option: number) =>
                updateSearchParams({
                  sort: SORT_TYPES[option].sortBy,
                  order: SORT_TYPES[option].sortType,
                }),
              selected: ((limit) => (limit < 0 ? 0 : limit))(
                SORT_TYPES.findIndex(
                  (e) => e.sortBy === sort && e.sortType === order
                )
              ),
            },
            {
              label: 'Items on Page',
              options: PER_PAGE_OPTIONS,
              onChange: (option: number) =>
                updateSearchParams({ limit: PER_PAGE_OPTIONS[option] }),
              selected: PER_PAGE_OPTIONS.findIndex(
                (e) => e === limit.toString()
              ),
            },
          ]}
        />
      )}

      {products && (
        <section className='catalog__pagination'>
          <Pagination itemsPerPage={limit} totalAmount={Number(resultCount)} />
        </section>
      )}
    </section>
  )
}

import { Pagination } from '../../Components/Pagination/Pagination'
import './catalog.scss'
import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs'
import { ProductCatalog } from '../../Components/ProductCatalog/ProductCatalog'
import { useCatalog } from './useCatalog'
import { PER_PAGE_OPTIONS, SORT_TYPES } from '../../utils/Constants'
import { Loader } from '../../Components/Loader/Loader'

export const Catalog: React.FC = () => {
  const { resultCount, products, limit, sort, order, updateSearchParams } =
    useCatalog()

  return (
    <section className='catalog'>
      <Breadcrumbs 
        className="catalog__breadcrumb"
      />


      <section>
        <h1 className="catalog__title">Mobile phones</h1>
        <p className="catalog__count">{resultCount} models</p>
      </section>

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

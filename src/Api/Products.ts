import { PhoneDetails, Product } from '../types/types'
import { client } from '../utils/fetchClient'

type getProductsOpts = {
  page?: number
  limit?: number
  sortBy?: string
  order?: string
}

type ListResult = {
  count: number
  currentPage: number
  data: Product[]
  itemsPerPage: number
  pages: number
}

export abstract class ProductService {
  static getProducts = ({
    page = 1,
    limit = 16,
    sortBy = 'id',
    order = 'asc',
  }: getProductsOpts) => {
    return client.get<ListResult>(
      `/products/?page=${page}&limit=${limit}&sort=${sortBy}&sortType=${order}`
    )
  }

  static getNewest = () => {
    return client.get<ListResult>(`/products/new`)
  }

  static getDiscounted = () => {
    return client.get<ListResult>(`/products/discount`)
  }

  static getRecommended = () => {
    return client.get<ListResult>(`/phones/recommended`)
  }

  static getPhoneById = async (productId: string) => {
    return await client.get<PhoneDetails>(`/products/${productId}`)
  }
}

// Add more methods here

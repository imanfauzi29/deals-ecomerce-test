import { TProducts } from "./products.types"

export type TCartProduct = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
}

export type TCarts = {
  id?: number
  products: TCartProduct[]
  total: number
  discountTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

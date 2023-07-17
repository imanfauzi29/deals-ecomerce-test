type TKeyValue = "products" | "carts"

type TResponseWithData<T> = {
  [key in TKeyValue]: T
} & {
  total: number
  skip: number
  limit: number
}

type TResponseOnlyData<T> = T

export type TResponse<T> = TResponseWithData<T>

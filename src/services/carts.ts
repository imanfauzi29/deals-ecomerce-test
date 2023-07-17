import { TResponse } from "@/types"
import axios from "axios"

export const getCarts = async <T extends object>(): Promise<TResponse<T>> => {
  return axios
    .get("https://dummyjson.com/carts")
    .then((res) => res.data)
    .catch(console.log)
}
export const getCartById = async <T extends object>({
  id,
}: {
  id: string
}): Promise<T> => {
  return axios
    .get(`https://dummyjson.com/carts/${id}`)
    .then((res) => res.data)
    .catch(console.log)
}

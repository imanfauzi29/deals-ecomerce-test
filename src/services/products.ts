import { TResponse } from "@/types"
import axios from "axios"

export const getProducts = async <T extends object>(): Promise<
  TResponse<T>
> => {
  return axios
    .get("https://dummyjson.com/products")
    .then((res) => res.data)
    .catch(console.log)
}

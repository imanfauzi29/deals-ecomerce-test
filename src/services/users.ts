import axios from "axios"

export const getUserById = async <T extends object>(id: number): Promise<T> => {
  return axios
    .get(`https://dummyjson.com/users/${id}`)
    .then((res) => res.data)
    .catch(console.log)
}

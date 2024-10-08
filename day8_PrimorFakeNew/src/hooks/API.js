import { useFetch } from "./useFetch";

export const useProducts = (page) =>
  useFetch(`https://dummyjson.com/products?limit=10&skip=${10 * page}`);

export const useProduct = (id) =>
  useFetch(`https://dummyjson.com/products/${id}`);

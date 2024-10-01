import { useFetch } from "./useFetch.js";

export const useProducts = (page) =>
  useFetch(`https://dummyjson.com/products?limit=10&skip=${10 * page}`);

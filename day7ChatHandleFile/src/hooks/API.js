import { useFetch } from "./useFetch.js";

export const useImages = (token) =>
  useFetch("https://photochat.anxoso.com/images", token);

export const useMessages = (token) =>
  useFetch("https://photochat.anxoso.com/messages", token);

import useFetch from "./useFetch.js";

export const useMessages = () =>
  useFetch("https://photochat.anxoso.com/messages");

export const useImages = () => useFetch("https://photochat.anxoso.com/images");

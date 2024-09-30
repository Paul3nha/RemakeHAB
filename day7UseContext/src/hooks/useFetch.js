import { useEffect, useState } from "react";

export const useFetch = (url, token) => {
  const [content, setContent] = useState(null);

  const headers = {};
  if (token) headers.Authorization = "Bearer " + token;

  useEffect(() => {
    fetch(url, { headers })
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [url, token]);

  return content;
};

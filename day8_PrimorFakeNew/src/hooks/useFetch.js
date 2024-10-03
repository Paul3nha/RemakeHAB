import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("recibí:", data); //para comprobar que no falle el fetch
        setContent(data);
      });
  }, [url]);

  return content;
};

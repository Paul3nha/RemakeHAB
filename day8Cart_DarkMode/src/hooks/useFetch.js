import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [url]);

  return content;
};

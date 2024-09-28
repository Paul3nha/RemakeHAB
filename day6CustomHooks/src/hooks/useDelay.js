import { useEffect, useState } from "react";

export const useDelay = (seconds) => {
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => setPopUp(true), seconds * 1000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return popUp;
};

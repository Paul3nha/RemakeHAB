import { useEffect, useState } from "react";

export const ScreenSize = () => {
  const [resolution, setResolution] = useState(
    `${window.innerWidth} x ${window.innerHeight}`
  );

  useEffect(() => {
    const handler = () =>
      setResolution(`${window.innerWidth}x${window.innerHeight}`);
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return resolution;
};

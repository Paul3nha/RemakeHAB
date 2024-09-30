import { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked!", count);
    setCount(count + 1);
  };

  return (
    <button type="button" onClick={handleClick}>
      Púlsame; xa van {count} veces
    </button>
  );
};

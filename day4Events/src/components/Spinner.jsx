import { useState } from "react";

export const Spinner = () => {
  const [num, setNum] = useState(0);

  const handleSum = () => {
    console.log("Suma un!:", num);
    setNum(num + 1);
  };

  const handleRest = () => {
    console.log("Resta un!:", num);
    setNum(num - 1);
  };

  return (
    <>
      <button type="button" onClick={handleSum}>
        ➕
      </button>
      <button>{num}</button>
      <button type="button" onClick={handleRest}>
        ➖
      </button>
    </>
  );
};

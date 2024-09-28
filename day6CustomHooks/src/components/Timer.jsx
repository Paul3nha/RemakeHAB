import { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      console.log("Interval");
      setCount((n) => n + 1);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return <div>Testing timers: {count}</div>;
};

/* useEffect(() => {}, []); */

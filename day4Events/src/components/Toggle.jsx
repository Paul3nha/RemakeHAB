import { useState } from "react";

export const Toggle = () => {
  const [value, setValue] = useState(false);
  return (
    <button onClick={() => setValue(!value)}>{value ? "🐷" : "🤢"}</button>
  );
};

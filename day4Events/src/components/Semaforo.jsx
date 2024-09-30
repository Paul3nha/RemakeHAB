import { useState } from "react";
import "./Semaforo.css";

export const Semaforo = () => {
  const [color, setColor] = useState("verde");
  return (
    <div className="semaforo">
      <div
        onClick={() => setColor("vermella")}
        className={`luz vermella ${color === "vermella" ? "active" : ""}`}
      />
      <div
        onClick={() => setColor("amarela")}
        className={`luz amarela ${color === "amarela" ? "active" : ""}`}
      />
      <div
        onClick={() => setColor("verde")}
        className={`luz verde ${color === "verde" ? "active" : ""}`}
      />
    </div>
  );
};

import { useState } from "react";
import "./Semaforo.css";

export const Semaforo = () => {
  const [color, setColor] = useState("verde");
  return (
    <div className="semaforo">
      <div
        onClick={() => setColor("vermella")}
        className={`luz vermella ${
          color === "vermella" ? "active" : ""
        }`} /* asignación de la clase según el estado del color actual. Si color es igual a "vermella", se agregará la clase "active" a la cadena resultante. Si no es así, se añadirá una cadena vacía "", lo que significa que no se añadirá nada. */
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

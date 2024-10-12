import { useEffect, useState } from "react";
import { useDelay } from "../hooks/useDelay.js";
import "./Spam.css";

export const Spam = () => {
  const popUp = useDelay(5);
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    if (popUp) {
      setIsOpen(true); //abre el modal cuando popUp es verdadero
    }
  }, [popUp]);

  const handleX = () => {
    setIsOpen(false); //cerrará el modal
  };

  return (
    isOpen && ( // Solo renderiza si isOpen es verdadero
      <div className="modal-container">
        <div className="modal-content">
          <button className="close-button" onClick={handleX}>
            &times;
          </button>
          <h1>Subscribe yourself to our services</h1>
        </div>
      </div>
    )
  );
};

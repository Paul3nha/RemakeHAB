import { useDelay } from "../hooks/useDelay.js";
import "./Spam.css";

export const Spam = () => {
  const popUp = useDelay(5);

  return (
    popUp && (
      <div className="modal-container">
        <div className="modal-content">
          <h1>Subscribe yourself to our services</h1>
        </div>
      </div>
    )
  );
};

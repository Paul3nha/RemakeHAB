import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./CartContext.jsx";
import { DarkModeProvider } from "./DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        {/* proveedores de contexto que envuelven la aplicación */}
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);

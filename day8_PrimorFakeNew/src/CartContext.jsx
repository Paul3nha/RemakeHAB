import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const enhancedSetCart = (v) => {
    setCart(v);
    localStorage.setItem("cart", JSON.stringify(v));
  };

  return (
    <CartContext.Provider value={[cart, enhancedSetCart]}>
      {children}
    </CartContext.Provider>
  );
};

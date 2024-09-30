import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const enhancedSetCart = (better) => {
    setCart(better);
    localStorage.setItem("cart", JSON.stringify(better));
  };
  return (
    <CartContext.Provider value={[cart, enhancedSetCart]}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

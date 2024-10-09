import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/API.js";
import { useDarkMode } from "../../DarkModeContext.jsx";
import { useCart } from "../../CartContext.jsx";
import { useState } from "react";
import "./Product.css";

export const Product = () => {
  const [cart, setCart] = useCart();
  const [isDark] = useDarkMode();
  const { id } = useParams();
  const product = useProduct(id);
  const [showMessage, setShowMessage] = useState(false);

  if (!product) return <p>Product not found</p>;

  const handleCart = () => {
    setCart([...cart, product]);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <section id="single-prod" className={isDark ? "dark" : "light"}>
      <h2>{product.title}</h2>
      <p className="more">{product.description}</p>
      <p className="more">Price: ${product.price}</p>
      <p className="more">Rating: {product.rating}</p>
      <p className="more">Stock: {product.stock}</p>
      <img className="more" src={product.thumbnail} alt={product.title} />
      <button className="more" onClick={handleCart}>
        🛒
      </button>
      {showMessage && <p className="more">Just Added to the cart!!</p>}
    </section>
  );
};

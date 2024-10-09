import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/API.js";
import "./Product.css";
import { useDarkMode } from "../../DarkModeContext.jsx";

export const Product = () => {
  const [isDark] = useDarkMode();
  const { id } = useParams();
  const product = useProduct(id);

  if (!product) return <p>Product not found</p>;

  return (
    <section id="single-prod" className={isDark ? "dark" : "light"}>
      <h2>{product.title}</h2>
      <p className="more">{product.description}</p>
      <p className="more">Price: ${product.price}</p>
      <p className="more">Rating: {product.rating}</p>
      <p className="more">Stock: {product.stock}</p>
      <img className="more" src={product.thumbnail} alt={product.title} />
    </section>
  );
};

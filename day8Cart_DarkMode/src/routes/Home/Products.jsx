import { Link } from "react-router-dom";
import { useCart } from "../../CartContext.jsx";
import { useProducts } from "../../hooks/API.js";

export const Products = () => {
  const [cart, setCart] = useCart();
  const products = useProducts(0);
  console.log(products);

  return (
    <div id="products">
      <h2>Our Products</h2>
      <div>
        {products?.products.map((prod) => (
          <div key={prod.id} className="product-card">
            <Link to={`/product/${prod.id}`}>
              <img src={prod.thumbnail} />
            </Link>
            <span>{prod.title}</span>
            <button onClick={() => setCart([...cart, prod])}>🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
};

import { useState } from "react";
import { useProducts } from "../hooks/API.js";
import "./Shop.css";

export const Shop = () => {
  const [page, setPage] = useState(0);
  const products = useProducts(page);

  return (
    <div>
      <h1>Our Shop</h1>
      <ul>
        {products?.products.map((product) => (
          <li key={product.id}>
            <div
              className="product-image"
              style={{ backgroundImage: `url("${product.thumbnail}")` }}
            />
            {product.title}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(page - 1)}>Previous</button>
        Página {page}
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/API.js";

export const Product = () => {
  const { id } = useParams();
  const product = useProduct(id);

  if (!product) return <p>Product not found</p>;

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <img src={product.thumbnail} alt={product.title} />
    </>
  );
};

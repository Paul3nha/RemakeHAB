import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/API.js";

export const Product = () => {
  const { id } = useParams();
  const { product, /*loading*/ error } = useProduct(id);

  // Manejo de loading, error o producto no encontrado
  /*if (loading) return <p>Loading products...</p>;*/
  if (error) return <p>Error fetching product</p>;
  if (!product) return <p>Product not found</p>;

  // Si el producto existe, renderizar su contenido
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

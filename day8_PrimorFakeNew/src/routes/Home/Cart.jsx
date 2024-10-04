import { useCart } from "../../CartContext.jsx";

export const Cart = () => {
  const [cart, setCart] = useCart();
  // if (!Array.isArray(cart)) {
  //   // Si 'cart' no es un array, muestra un mensaje o inicialízalo como array vacío
  //   return <div>El carrito está vacío o es inválido.</div>;
  // }
  return (
    <div id="cart">
      <h2>Mi carrito</h2>
      <div>
        {cart.map((prod, i) => (
          <div key={i}>
            {prod.title}
            <button onClick={() => setCart(cart.filter((p, j) => i !== j))}>
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

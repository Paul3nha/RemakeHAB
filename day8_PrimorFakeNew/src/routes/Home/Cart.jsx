import { useCart } from "../../CartContext.jsx";

export const Cart = () => {
  const [cart, setCart] = useCart();
  return (
    <div id="cart">
      <h2>Mi carrito</h2>
      <div id="cart-list">
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

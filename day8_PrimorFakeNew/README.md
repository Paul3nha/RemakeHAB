# Fake Primor

Se trata de la clásica web de compras cuyo disposición cuenta con un header, un carrito de la compra (en el lateral derecho de la página) y la parte principal de la misma, donde se muestran los diferentes productos que son elementos de una lista desordenada recorridos mediante .map() (ya que se trata de un array desde un JSON de una API).

Usamos dos contextos mediante 2 hooks customizados:
Uno para mantener el carrito de la compra --> CartProvider (CartContext.jsx) - Otro para establecer el modo claro u oscuro de pantalla --> DarkModeProvider (DarModeContext.jsx).

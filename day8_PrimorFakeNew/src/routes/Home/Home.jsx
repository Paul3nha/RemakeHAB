import { useDarkMode } from "../../DarkModeContext.jsx";
import { Cart } from "./Cart.jsx";
import { Products } from "./Products.jsx";

export const Home = () => {
  const [isDark] = useDarkMode();

  return (
    <div id="home" className={isDark ? "dark" : "light"}>
      <Products />
      <Cart />
    </div>
  );
};

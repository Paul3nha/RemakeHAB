import { useDarkMode } from "../../DarkModeContext.jsx";
import { Cart } from "./Cart.jsx";
import { Products } from "./Products.jsx";
import "./Home.css";

export const Home = () => {
  const [dark] = useDarkMode();
  return (
    <div id="home" className={dark ? "dark" : "light"}>
      <Products />
      <Cart />
    </div>
  );
};

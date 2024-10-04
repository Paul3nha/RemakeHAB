import { Link } from "react-router-dom";
import { DarkMode } from "./DarkMode.jsx";
import "./Header.css";

export const Header = () => {
  return (
    <header id="head">
      <Link to="/">
        <h1>Mi Tienda</h1>
      </Link>
      <DarkMode />
    </header>
  );
};
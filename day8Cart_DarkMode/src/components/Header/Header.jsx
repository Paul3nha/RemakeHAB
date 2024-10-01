import { Link } from "react-router-dom";
import { DarkMode } from "./DarkMode";
import "./Header.css";

export const Header = () => {
  return (
    <header id="head">
      <Link to="/">
        <h1>Primor Fake Shop</h1>
      </Link>
      <DarkMode />
    </header>
  );
};

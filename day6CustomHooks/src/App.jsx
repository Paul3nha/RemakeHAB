import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./routes/Home.jsx";
import { Shop } from "./routes/Shop.jsx";
import { Recipes } from "./routes/Recipes.jsx";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/recipes">Recipes</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="recipes" element={<Recipes />}></Route>
      </Routes>
    </>
  );
}

export default App;

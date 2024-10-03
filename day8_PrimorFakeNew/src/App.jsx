import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { Products } from "./routes/Home/Products.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;

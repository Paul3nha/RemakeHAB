import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { Product } from "./routes/Product/Product.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;

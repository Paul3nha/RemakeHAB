import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./routes/Home/Home.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="product/:id" element={"fvsfv"}></Route>
      </Routes>
    </>
  );
}

export default App;

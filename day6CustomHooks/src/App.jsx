import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./routes/Home.jsx";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;

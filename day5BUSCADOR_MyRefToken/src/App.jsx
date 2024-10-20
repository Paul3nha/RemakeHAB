import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Home } from "./routes/Home.jsx";
import { Login } from "./routes/Login.jsx";
import { SignUp } from "./routes/SignUp.jsx";
import { Products } from "./routes/Products.jsx";
import { useState } from "react";
import "./index.css"; /* IMPORTANTE */
import { Footer } from "./components/Footer.jsx";

function App() {
  const [userinfo, setUserinfo] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-emerald-400 p-4">
      <main className="flex-grow">
        <Header userinfo={userinfo} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="login"
            element={<Login userinfo={userinfo} setUserinfo={setUserinfo} />}
          ></Route>
          <Route
            path="signup"
            element={<SignUp userinfo={userinfo} setUserinfo={setUserinfo} />}
          ></Route>
          <Route path="products" element={<Products />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

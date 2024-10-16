import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./routes/Layout/Layout.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { Login } from "./routes/Login/Login.jsx";
import "./index.css"; /* IMPORTANTE */
import { SignUp } from "./routes/SignUp/SignUp.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

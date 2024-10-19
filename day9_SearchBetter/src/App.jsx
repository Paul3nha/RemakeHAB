import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./routes/Layout/Layout.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { Login } from "./routes/Login/Login.jsx";
import { Signup } from "./routes/Signup/Signup.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="signup"
          element={<Signup />}
        />
      </Route>
    </Routes>
  );
}

export default App;

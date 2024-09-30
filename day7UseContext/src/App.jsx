import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Routes/Layout/Layout.jsx";
import { useState } from "react";
import { Home } from "./Routes/Home/Home.jsx";
import { Login } from "./Routes/Login/Login.jsx";
import { Upload } from "./Routes/Upload/Upload.jsx";
import PropTypes from "prop-types";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} />}>
        <Route index element={<Home user={user} />}></Route>
        <Route
          path="login"
          element={<Login user={user} setUser={setUser} />}
        ></Route>
        <Route path="upload" element={<Upload user={user} />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

App.propTypes = {
  user: PropTypes.object,
};

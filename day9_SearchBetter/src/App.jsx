import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./routes/Layout/Layout.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { Login } from "./routes/Login/Login.jsx";
import { Signup } from "./routes/Signup/Signup.jsx";
import { Imgur } from "./routes/Imgur/Imgur.jsx";
import { Image } from "./routes/Image/Image.jsx";
import { Rick } from "./routes/Rick/Rick.jsx";
import { RickResults } from "./routes/Rick/RickResults.jsx";
import { RickCharacter } from "./routes/Rick/RickCharacter.jsx";
import { Upload } from "./Upload/Upload.jsx";

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
        ></Route>
        <Route
          path="login"
          element={<Login />}
        ></Route>
        <Route
          path="signup"
          element={<Signup />}
        ></Route>
        <Route
          path="upload"
          element={<Upload />}
        ></Route>
        <Route
          path="imgur"
          element={<Imgur />}
        ></Route>
        <Route
          path="image/:id"
          element={<Image />}
        ></Route>
        <Route
          path="rick"
          element={<Rick />}
        >
          <Route
            index
            element={<RickResults />}
          />
          <Route
            path=":id"
            element={<RickCharacter />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

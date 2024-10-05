import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./routes/Layout.jsx";
import { SearchPhotos } from "./routes/SearchPhotos.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPhotos />} />
          <Route path="my-photos" element={"dfv"} />
          <Route path="*" element={"dfv"} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={"fdsvc"}>
          <Route index element={"svadv"} />
          <Route path="my-photos" element={"dfv"} />
          <Route path="*" element={"dfv"} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

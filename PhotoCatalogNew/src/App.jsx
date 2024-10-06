import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./routes/Layout.jsx";
import { SearchPhotos } from "./routes/SearchPhotos.jsx";
import { useEffect, useState } from "react";
import { NotFound } from "./routes/NotFound.jsx";
import { MyPhotos } from "./routes/MyPhotos.jsx";

function App() {
  const storageFav = JSON.parse(localStorage.getItem("fav")) || [];

  const [photoList, setPhotoList] = useState([]);
  const [fav, setFav] = useState(storageFav);
  const addFav = (photo) => {
    setFav([...fav, photo]);
  };

  const removeFav = (photoRemove) => {
    setFav(fav.filter((photo) => photo.id !== photoRemove.id));
  };

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <SearchPhotos
                photoList={photoList}
                setPhotoList={setPhotoList}
                fav={fav}
                addFav={addFav}
                removeFav={removeFav}
              />
            }
          />
          <Route
            path="my-photos"
            element={
              <MyPhotos fav={fav} addFav={addFav} removeFav={removeFav} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./routes/Layout.jsx";
import { SearchPhotos } from "./routes/SearchPhotos.jsx";
import { useEffect, useState } from "react";

function App() {
  const storageFav = JSON.parse(localStorage.getItem("fav")) || []; //o coge uno o coge vacío

  const [photoList, setPhotoList] = useState([]);
  const [fav, setFav] = useState(storageFav); //fotos fav guardadas en el navegador

  const addFav = (photo) => {
    setFav([...fav, photo]);
  };

  const removeFav = (photoRemove) => {
    setFav(fav.filter((photo) => photo.id !== photoRemove.id)); //comparo elemento actual con el que quiero quitar de fav
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
          <Route path="my-photos" element={"dfv"} />
          <Route path="*" element={"dfv"} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

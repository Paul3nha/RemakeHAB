import { PhotoList } from "../components/PhotoList.jsx";
import { SearchForm } from "../components/SearchForm.jsx";

export const SearchPhotos = (props) => {
  const { photoList, setPhotoList, fav, addFav, removeFav } = props;

  return (
    <section id="search-photos">
      <h2>Search Photos</h2>
      <SearchForm setPhotoList={setPhotoList} />
      <PhotoList
        photoList={photoList}
        fav={fav}
        addFav={addFav}
        removeFav={removeFav}
      />
    </section>
  );
};

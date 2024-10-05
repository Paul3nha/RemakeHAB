import { PhotoList } from "../components/PhotoList";

export const MyPhotos = ({ fav, addFav, removeFav }) => {
  return (
    <section>
      <h2>MyPhotos</h2>
      {<PhotoList />}
    </section>
  );
};

import { Photo } from "./Photo.jsx";

export const PhotoList = ({ photoList, fav, addFav, removeFav }) => {
  return (
    <ul className="photos-list">
      {photoList.map((photo) => (
        <li key={photo.id}>
          {
            <Photo
              photo={photo}
              fav={fav}
              addFav={addFav}
              removeFav={removeFav}
            />
          }
        </li>
      ))}
    </ul>
  );
};

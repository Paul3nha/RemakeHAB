export const PhotoList = ({ photoList, fav, addFav, removeFav }) => {
  return (
    <ul className="photos-list">
      {PhotoList.map((photo) => (
        <li key={photo.id}>{"dc"}</li>
      ))}
    </ul>
  );
};

import { HearthIcon } from "./HearthIcon.jsx";

export const Photo = ({ photo, fav, addFav, removeFav }) => {
  const isFav = fav.find((favourite) => favourite.id === photo.id);
  const color = isFav ? "rojo" : "rgb(255,255,255,0.7)";

  const onClick = isFav ? removeFav : addFav; //toggle

  return (
    <>
      <img src={photo.src.small} alt={photo.alt} title={photo.alt} />
      <button>
        {<HearthIcon fillColor={color} onClick={() => onClick(photo)} />}
      </button>
    </>
  );
};

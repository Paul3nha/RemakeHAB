import React from "react";

export const Photo = ({ photo, fav, addFav, removeFav }) => {
  return (
    <>
      <img src={photo.src.small} alt={photo.alt} title={photo.alt} />
      <button></button>
    </>
  );
};

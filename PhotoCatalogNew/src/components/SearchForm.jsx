import { useState } from "react";

export const SearchForm = ({ setPhotoList }) => {
  const [warning, setWarning] = useState();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const query = e.target.elements.search.value; //elements accedemos a todo y search al del mismo name

      if (!query || query.lenght < 3) {
        throw new Error("Please, enter a valid text");
      }

      const response = await fetch(
        `https://api.pexels.com/v1/search?${searchParams.toString()}`, //para concatenar textos
        {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY,
          },
        }
      );

      const result = await response.json();
      console.log(result);
      setPhotoList(result.photos); //actualizamos la lista de fotos
    } catch (error) {
      setWarning(error.message);
      setTimeout(() => setWarning(""), 3000); //q se limpie el warning tras 3 sec
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <input type="search" placeholder="write your search" name="search" />
        <button>🔍</button>
      </fieldset>
      {warning && <p style={{ color: "red" }}>{warning}</p>}
    </form>
  );
};

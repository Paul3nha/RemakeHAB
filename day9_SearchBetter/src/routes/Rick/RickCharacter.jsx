import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

export const RickCharacter = () => {
  const { id } = useParams();
  const char = useFetch("https://rickandmortyapi.com/api/character/" + id);
  if (!char) return "Loading...";

  return (
    <div>
      <h1>{char.name}</h1>
      <img src={char.image} />
      <p>
        {char.name} is a {char.species}, which is {char.status}. Its gender is{" "}
        {char.gender} and lives on {char.location.name}
      </p>
    </div>
  );
};

/* este componente sirve para mostrar el detalle por individual del personaje en concreto  cuando clickamos sobre el en RickResults */

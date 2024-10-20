import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const RickResults = () => {
  const [results, setResults] = useState();
  const [query] = useSearchParams();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?" + query.toString())
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  }, [query]);
  return (
    <ul>
      {results?.map((char) => (
        <Link
          to={"/rick/" + char.id}
          key={char.id}
        >
          <li>
            <img
              src={char.image}
              alt="character image"
            />
            {char.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

/* este componente hace la busqueda para mostrar resultados */

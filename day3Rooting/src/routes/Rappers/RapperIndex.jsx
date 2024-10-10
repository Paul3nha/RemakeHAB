import { Link } from "react-router-dom";
import rappers from "../../data/rappers.json";

function RapperCard({ bio_birthdate, name }) {
  return (
    <li>
      <Link to={`${bio_birthdate}`}>{name}</Link>
    </li>
  );
}
//Esto hace que cada rapero en la lista sea un enlace que lleva a una página detallada del mismo.

export const RapperIndex = () => {
  console.log(rappers);

  return (
    <div>
      <h3 className="text-center font-bold">Rappers:</h3>
      <ul className="text-center">
        {rappers.map((rapper) => (
          <RapperCard
            key={rapper.bio_birthdate}
            name={rapper.name}
            bio_birthdate={
              rapper.bio_birthdate
            } /* Pasando bio_birthdate como prop*/
          />
        ))}
      </ul>
    </div>
  );
};

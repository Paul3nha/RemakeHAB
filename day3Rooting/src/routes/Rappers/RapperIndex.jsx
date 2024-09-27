import { Link } from "react-router-dom";
import rappers from "../../data/rappers.json";
import "./RapperIndex.css";

function RapperCard({ bio_birthdate, name }) {
  return (
    <li>
      <Link to={`${bio_birthdate}`}>{name}</Link>
    </li>
  );
}
//Esto hace que cada producto en la lista sea un enlace que lleva a una página detallada del producto.

export const RapperIndex = () => {
  console.log(rappers);

  return (
    <div>
      <h3>Rappers:</h3>
      <ul id="rappers-map">
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

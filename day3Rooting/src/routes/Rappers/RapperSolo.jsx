import { useParams } from "react-router-dom"; // acceder a los parámetros dinámicos de la URL. En este caso, el parámetro bio_birthdate es extraído de la URL como /rappers/:bio_birthdate.
import rappers from "../../data/rappers.json";
import "./RapperSolo.css";

export const RapperSolo = () => {
  const { bio_birthdate } = useParams(); //obtenemos el parámetro bio-birthdate de la url

  // Buscar el rapero que tenga el bio_birthdate igual al parámetro

  const sameRapper = rappers.find(
    (rapper) => rapper.bio_birthdate === bio_birthdate
  );

  if (!sameRapper) {
    return <div>We cant find that rapper in our Data Base, sorry</div>;
  }

  return (
    <div id="rapper-solo">
      <h2>{sameRapper.name}</h2>
      <p>{sameRapper.categories}</p>
      <p>{sameRapper.bio_url}</p>
      <p>{sameRapper.bio_birthdate}</p>
      <p>{sameRapper.youtube_clipexampleurl}</p>
      <p>{sameRapper.location_city}</p>
    </div>
  );
};

import { useParams } from "react-router-dom"; // acceder a los parámetros dinámicos de la URL. En este caso, el parámetro bio_birthdate es extraído de la URL como /rappers/:bio_birthdate.
import rappers from "../../data/rappers.json";

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
    <div className="flex-col">
      <h2 className="text-2xl font-bold mt-5">{sameRapper.name}</h2>
      <ul>
        <li>{sameRapper.categories}</li>
        <li>{sameRapper.bio_url}</li>
        <li>{sameRapper.bio_birthdate}</li>
        <li>{sameRapper.youtube_clipexampleurl}</li>
        <li>{sameRapper.location_city}</li>
      </ul>
    </div>
  );
};

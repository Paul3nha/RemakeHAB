import { useParams } from "react-router-dom";

export const Image = () => {
  const { id } = useParams();
  return (
    <div
      id="image"
      className="page"
    >
      <h1>See image</h1>
      <img
        src={`https://photochat.anxoso.com/image/${id}`}
        id="chat-img"
      />
      {/* Se muestra una imagen (<img>) cuyo atributo src se genera dinámicamente utilizando el parámetro id */}
    </div>
  );
};

/* esta ruta sirve para cuando clickes una imagen del chat, poderla vez */

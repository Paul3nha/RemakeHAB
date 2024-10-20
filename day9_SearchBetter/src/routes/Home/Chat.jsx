import { Link } from "react-router-dom";
import { useImages, useMessages } from "../../hooks/API.js";

export const Chat = () => {
  const messages = useMessages(); //fetch para los mensajes
  const images = useImages(); //fetch para las imágenes
  return (
    <>
      <div>
        {images?.map((img) => (
          <Link
            key={img.date}
            to={`/image/${img.date}`}
          >
            <img src={img.url} />
          </Link>
        ))}
      </div>
      <div>
        {messages?.map((msg) => (
          <Link key={msg.date}>
            <span className={`name color-${msg.name.length}`}>{msg.name}</span>{" "}
            {/* nombre del usuario */}
            <span className="message">{msg.message}</span> {/* comentario */}
          </Link>
        ))}
      </div>
    </>
  );
};

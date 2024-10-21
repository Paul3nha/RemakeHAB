import { Link } from "react-router-dom";
import { useImages, useMessages } from "../../hooks/API.js";

export const Chat = () => {
  const messages = useMessages(); //importamos el fetch para los mensajes
  const data = useImages(); //importamos el fetch para las imágenes

  return (
    <>
      <div>
        {data?.map((img) => (
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
          <div key={msg.date}>
            <span className={`name color-${msg.name.length}`}>{msg.name}</span>
            <span className="message">{msg.message}</span>
          </div>
        ))}
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import { useImages, useMessages } from "../../hooks/API.js";
import PropTypes from "prop-types";

export const Chat = ({ user }) => {
  const data = useImages(user.token);
  const messages = useMessages(user.token);

  return (
    <div id="chat">
      <div id="images">
        {data?.map((img) => (
          <img key={img.date} src={img.url} />
        ))}
        <Link to="/upload">Add an image</Link>
      </div>

      <div id="messages">
        {messages?.map((msg) => (
          <div key={msg.date}>
            <span className={`name color-${msg.name.length}`}>{msg.name}</span>:
            <span className="message">{msg.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Chat.propTypes = {
  user: PropTypes.object.isRequired,
};

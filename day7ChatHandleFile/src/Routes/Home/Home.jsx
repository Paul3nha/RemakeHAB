import { Chat } from "./Chat.jsx";
import PropTypes from "prop-types";

export const Home = ({ user }) => {
  return (
    <div id="home" className="page">
      <h1>My Chat</h1>
      {user ? <Chat user={user} /> : <span>Please, log in to continue...</span>}
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object,
};

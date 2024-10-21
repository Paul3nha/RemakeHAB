import { Link, Navigate } from "react-router-dom";
import { useUser } from "../../UserContext.jsx";
import { Chat } from "./Chat.jsx";

export const Home = () => {
  const [user] = useUser();
  return (
    <div
      id="home"
      className="page"
    >
      <h1>
        My Chat
        <nav id="nav-ppal">
          <Link to="/upload">Upload</Link>
          <Link to="/imgur">Imgur</Link>
          <Link to="/rick">Rick</Link>
        </nav>
      </h1>
      {user ? <Chat /> : <Navigate to="/login" />}
    </div>
  );
};

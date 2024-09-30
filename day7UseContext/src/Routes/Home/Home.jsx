import { useUser } from "../../UserContext.jsx";
import { Chat } from "./Chat.jsx";

export const Home = () => {
  const [user] = useUser();

  return (
    <div id="home" className="page">
      <h1>My Chat</h1>
      {user ? <Chat user={user} /> : <span>Please, log in to continue...</span>}
    </div>
  );
};

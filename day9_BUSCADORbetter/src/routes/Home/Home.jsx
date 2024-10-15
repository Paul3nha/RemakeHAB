import { Navigate } from "react-router-dom";
import { useUser } from "../../UserContext.jsx";
import { Chat } from "./Chat.jsx";

export const Home = () => {
  const [user] = useUser(); //importamos el usuario
  return (
    <div>
      <h1>My Chat</h1>
      {user ? <Chat /> : <Navigate to="/login" />}
    </div>
  );
};

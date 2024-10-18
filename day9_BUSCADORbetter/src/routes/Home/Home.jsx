import { Navigate } from "react-router-dom";
import { useUser } from "../../UserContext.jsx";
import { Chat } from "./Chat.jsx";

export const Home = () => {
  const [user] = useUser(); //importamos el usuario
  return (
    <div>
      <h1 className="text-center m-2 font-bold text-lg sm:text-xl lg:text-2xl">
        My Chat
      </h1>
      {user ? <Chat /> : <Navigate to="/login" />}
    </div>
  );
};

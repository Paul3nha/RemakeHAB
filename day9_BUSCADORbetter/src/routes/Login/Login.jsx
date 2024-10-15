import { useState } from "react";
import { useUser } from "../../UserContext.jsx";
import { Navigate } from "react-router-dom";

export const Login = () => {
  //creamos un estado por cada dato que queramos mandar en el formulario
  const [user, setUser] = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  };
  if (user) {
    return <Navigate to="/" />;
  }

  return <div></div>;
};

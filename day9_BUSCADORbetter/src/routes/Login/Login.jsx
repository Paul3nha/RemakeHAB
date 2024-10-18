import { useState } from "react";
import { useUser } from "../../UserContext.jsx";
import { Link, Navigate } from "react-router-dom";

export const Login = () => {
  //creamos un estado por cada dato que queramos mandar en el formulario
  const [user, setUser] = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await fetch("https://photochat.anxoso.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const json = await res.json();
    if (res.ok) {
      setUser(json);
    } else {
      setError(json.error);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-300">
      <h1 className="text-center m-2 font-bold">Log In:</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md mx-1 w-full"
      >
        <label>
          <span>User:</span>
          <input
            name="username"
            className="border p-2 rounded w-full"
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            className="border p-2 rounded w-full"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="bg-yellow-100 text-black py-2 rounded w-full">
          Go In
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-4">
          <p>If you cant log in, you can register your account here</p>
          <Link
            to="/signup"
            className="bg-yellow-100 text-black py-2 px-4 rounded text-center"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

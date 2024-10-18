import { Navigate } from "react-router-dom";
import { useUser } from "../../UserContext.jsx";
import { useState } from "react";

export const SignUp = () => {
  const [user, setUser] = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await fetch("https://photochat.anxoso.com/register", {
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

  if (user) return <Navigate to="/" />;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-300 w-full">
      <h1 className="text-center m-2 font-bold">Sign Up:</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md mx-1 w-svw mr-0"
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
          Register
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

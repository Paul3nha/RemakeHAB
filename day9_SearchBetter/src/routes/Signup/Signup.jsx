import { useState } from "react";
import { useUser } from "../../UserContext.jsx";
import { Navigate } from "react-router-dom";

export const Signup = () => {
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
    <div>
      <h1>Sign Up:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>User:</span>
          <input
            type="text"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Register</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

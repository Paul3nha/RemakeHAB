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
    <div>
      <h1>Log In:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>User:</span>
          <input
            name="username"
            value={username}
            type="text"
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
        <button>Go In</button>
        {error && <p>{error}</p>}
        <div>
          <p>If you cant log in, you can register your account here</p>
          <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  );
};
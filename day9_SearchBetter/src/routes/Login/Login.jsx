import { useState } from "react";
import { useUser } from "../../UserContext.jsx";
import { Link, Navigate } from "react-router-dom";

export const Login = () => {
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
    <div
      id="login"
      className="page"
    >
      <h1>Log In:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>User:</span>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Go In</button>
        {error && <p>If you cant log in, you can register your account here</p>}
        <Link to="/signup">Regist an account now</Link>
      </form>
    </div>
  );
};

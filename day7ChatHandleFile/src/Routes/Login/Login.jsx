import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Login = ({ user, setUser }) => {
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
    return (
      <div id="login" className="page">
        <h1>You have already logued in</h1>
        <Link to="/">Continue...</Link>
      </div>
    );
  }

  return (
    <div id="login" className="page">
      <h1>Please, log yourself</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username:</span>
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
        <button>Go in</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

Login.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};

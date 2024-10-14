import { useState } from "react";
import PropTypes from "prop-types";

export const Login = ({ userinfo, setUserinfo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();

    const res = await fetch("https://8gag-api.anxoso.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userinfo, setUserinfo }),
    });
    const data = await res.json();
    console.log("I got:", data);

    if (!res.ok) {
      setError(true);
    } else {
      setUserinfo(data);
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  if (userinfo) {
    return <div>Ya has iniciado sesión</div>;
  }

  return (
    <div className="flex-grow text-start">
      <h1 className="font-fira text-3xl font-bold p-8 text-center">Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          <span>Password:</span>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Go In</button>
        <button onClick={handleReset}>Clean All</button>
        {error && <p>User or password incorrect</p>}
      </form>
    </div>
  );
};

Login.propTypes = {
  userinfo: PropTypes.object, // Puede ser un objeto o null
  setUserinfo: PropTypes.func.isRequired, // Debe ser una función obligatoriamente
};

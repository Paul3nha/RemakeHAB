import { useState } from "react";
import PropTypes from "prop-types";

export const SignUp = ({ userinfo, setUserinfo }) => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit:", values);

    const res = await fetch("https://8gag-api.anxoso.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
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
    setValues({
      name: "",
      username: "",
      password: "",
    });
  };

  if (userinfo) {
    return <div>Te has registrado con éxito.</div>;
  }
  return (
    <div className="flex-grow text-start">
      <h1 className="font-fira text-3xl font-bold p-8 text-center">Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </label>
        <label>
          <span>Username:</span>
          <input
            type="text"
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </label>
        <button>Send</button>
        <button onClick={handleReset}>Clean</button>
        {error && <p>This user does already exists</p>}
      </form>
    </div>
  );
};

SignUp.propTypes = {
  userinfo: PropTypes.object, // Puede ser un objeto o null
  setUserinfo: PropTypes.func.isRequired, // Debe ser una función obligatoriamente
};

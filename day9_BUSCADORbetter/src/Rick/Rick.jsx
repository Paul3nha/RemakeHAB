import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet, useSearchParams } from "react-router-dom";

export const Rick = () => {
  const [query, setQuery] = useSearchParams();
  const [name, setName] = useState(query.get("name") || "");
  const [status, setStatus] = useState(query.get("status") || "");
  const [gender, setGender] = useState(query.get("gender") || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setQuery({ name, status, gender });
  };
  return (
    <div>
      <h1>Search a character:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>State:</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <label>
          <span>Genre:</span>
          <select
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Non Binary</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <button>🔍</button>
      </form>
      <ErrorBoundary fallback={<p>We couldn´t find that character</p>}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
};

/* query.get --> busca el valor del parámtero de búsqueda llamado "name" en la URL */

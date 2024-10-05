import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>My photo page</h1>
      <nav>
        <ul>
          <Link to="/">
            <li>
              <button>Search Photos</button>
            </li>
          </Link>
          <Link to="my-photos">
            <li>
              <button>My Photos</button>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>First Page</h1>
      Pages
      <ul>
        <li>
          <Link to="/login">Log Yourself</Link>
        </li>
        <li>
          <Link to="/signup">Sign In</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

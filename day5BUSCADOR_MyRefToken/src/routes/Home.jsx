import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="font-fira text-3xl font-bold p-8">
          Welcome to our page
        </h1>
        Links
        <ul className="flex flex-col items-center">
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
    </>
  );
};

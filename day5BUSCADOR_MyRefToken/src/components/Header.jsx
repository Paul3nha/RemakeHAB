import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Header = ({ userinfo }) => {
  return (
    <header className="flex place-content-between bg-emerald-200 border rounded-lg p-2">
      <Link to="/">
        <h1 className="font-fira">My Page</h1>
      </Link>
      {userinfo ? (
        <span>Welcome, {userinfo.username}</span>
      ) : (
        <Link to="/login" className="font-fira">
          Log In
        </Link>
      )}
    </header>
  );
};

Header.propTypes = {
  userinfo: PropTypes.object,
};

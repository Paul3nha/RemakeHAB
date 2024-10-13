import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Header = ({ userinfo }) => {
  return (
    <header>
      <Link to="/">
        <h1>My Page</h1>
      </Link>
      {userinfo ? (
        <span>Welcome, {userinfo.username}</span>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </header>
  );
};

Header.propTypes = {
  userinfo: PropTypes.object,
};

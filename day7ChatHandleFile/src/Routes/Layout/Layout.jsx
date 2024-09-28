import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export const Layout = ({ user }) => {
  return (
    <>
      <header>
        <Link to="/">
          <h1>My Chat 💻</h1>
        </Link>
        {user ? <span>{user.username}</span> : <Link to="/login">Log in</Link>}
      </header>
      <Outlet />
    </>
  );
};

Layout.propTypes = {
  user: PropTypes.object,
};

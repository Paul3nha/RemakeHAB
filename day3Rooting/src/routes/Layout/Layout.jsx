import { Link, NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>My Rappers page</h1>
        </Link>
        <nav>
          <NavLink to="/chat">Chat</NavLink>
          <NavLink to="/rappers">Rappers</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
        <Link to="/user/login">LogIn bi🌟tch</Link>
      </header>
      <Outlet />
    </div>
  );
};

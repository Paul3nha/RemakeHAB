import { Link, NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header className="flex place-content-between p-4 bg-gray-400">
        <Link to="/">
          <h1 className="text-zinc-800">My Rappers page</h1>
        </Link>
        <nav className="flex gap-2">
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

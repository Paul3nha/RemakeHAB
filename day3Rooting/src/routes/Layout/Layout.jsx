import { Link, NavLink, Outlet } from "react-router-dom";
import { Footer } from "../../../components/Footer.jsx";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex place-content-between p-4 bg-gray-400">
        <Link to="/">
          <h1 className="text-zinc-800">Home</h1>
        </Link>
        <nav className="flex gap-2">
          <NavLink to="/chat">Chat</NavLink>
          <NavLink to="/rappers">Rappers</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
        <Link to="/user/login">Log🌟In </Link>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../UserContext.jsx";

export const Layout = () => {
  const [user] = useUser();

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

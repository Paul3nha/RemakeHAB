import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../UserContext.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "./ErrorPage.jsx";

export const Layout = () => {
  const [user] = useUser();
  return (
    <div>
      <header>
        <Link to="/">
          <h1>My Chat</h1>
        </Link>
        {user ? (
          <span>Hi, {user.username}</span>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </header>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
};

/* instalar npm i react-error-boundary */

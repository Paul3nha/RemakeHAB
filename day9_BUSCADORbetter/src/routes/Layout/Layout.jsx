import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../UserContext.jsx";
import { ErrorBoundary } from "react-error-boundary"; // Biblioteca importada para manejar errores en componentes de React.
import { ErrorPage } from "./ErrorPage.jsx";
export const Layout = () => {
  const [user] = useUser(); //importamos el contexto
  return (
    <>
      <header>
        <Link to="/">
          <h1>My Chat</h1>
        </Link>
        {user ? (
          <span>Buenas, {user.username}</span>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </header>
      <ErrorBoundary fallback={<ErrorPage />}>
        {/* Componente que captura errores en sus componentes hijos y permite mostrar una IU alternativa (fallback) en caso de error. */}
        <Outlet />
      </ErrorBoundary>
    </>
  );
};

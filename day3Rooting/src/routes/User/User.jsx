import { Outlet } from "react-router-dom";

export const User = () => {
  return (
    <div>
      <h2>User Section</h2>
      <Outlet />
    </div>
  );
};

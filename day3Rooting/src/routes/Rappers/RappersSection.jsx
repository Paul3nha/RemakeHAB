import { Outlet } from "react-router-dom";

export const RappersSection = () => {
  return (
    <div>
      <div className="absolute border-r border-gray-500">
        My fav rappers: ...
      </div>
      <Outlet />
    </div>
  );
};

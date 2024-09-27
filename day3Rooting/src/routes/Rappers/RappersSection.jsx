import { Outlet } from "react-router-dom";
import "./RapperSection.css";

export const RappersSection = () => {
  return (
    <div id="rappers">
      <div id="fav-rappers">My fav rappers: ...</div>
      <Outlet />
    </div>
  );
};

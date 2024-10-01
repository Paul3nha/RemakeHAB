import { useDarkMode } from "../../DarkModeContext.jsx";

export const Home = () => {
  const [dark] = useDarkMode();
  return (
    <div id="home" className={dark ? "dark" : "light"}>
      Home
    </div>
  );
};

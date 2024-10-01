import { useDarkMode } from "../../DarkModeContext.jsx";

export const DarkMode = () => {
  const [dark, setDark] = useDarkMode();

  return <span onClick={() => setDark(!dark)}>{dark ? "🌚" : "☀️"}</span>;
};

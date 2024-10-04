import { useDarkMode } from "../../DarkModeContext.jsx";

export const DarkMode = () => {
  const [isDark, setDark] = useDarkMode();
  return <span onClick={() => setDark(!isDark)}>{isDark ? "🌙" : "☀️"}</span>;
};

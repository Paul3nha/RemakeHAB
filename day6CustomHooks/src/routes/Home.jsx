import { ScreenSize } from "../components/ScreenSize.jsx";
import { Spam } from "../components/Spam.jsx";
import { Timer } from "../components/Timer.jsx";

export const Home = () => {
  return (
    <div>
      <h1>Welcome to the main page</h1>
      <Timer />
      <ScreenSize />
      <Spam />
    </div>
  );
};

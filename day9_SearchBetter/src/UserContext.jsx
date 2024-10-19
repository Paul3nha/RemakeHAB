import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("session")) || null
  );

  const enhancedSetUser = (better) => {
    setUser(better);
    localStorage.setItem("session", JSON.stringify(better));
  };

  return (
    <UserContext.Provider value={[user, enhancedSetUser]}>
      {children}
    </UserContext.Provider>
  );
};

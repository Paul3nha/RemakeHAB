import { createContext, useContext, useState } from "react";

export const UserContext = createContext(); //creas el nuevo contexto
export const useUser = () => useContext(UserContext); //metes el nuevo contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("session")) || null //usamos localStorage para persistir en la sesión, y si no hay datos, que nos de null
  );

  //sincroniza el estado con el local storage
  const enhancedSetUser = (v) => {
    setUser(v);
    localStorage.setItem("session", JSON.stringify(v)); //almacena el valor v en el localStorage bajo la clave "session".
  };
  return (
    <UserContext.Provider value={[user, enhancedSetUser]}>
      {children}
    </UserContext.Provider>
  );
};

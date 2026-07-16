import { createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const user = {
    name: "Иван",
    email: "ivan@gmail.com",
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

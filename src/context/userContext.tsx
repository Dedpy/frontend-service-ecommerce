import React, { useState, createContext, ReactNode } from "react";
import { User } from "../types/user";
import { CommandeDetail } from "../types/commandeDetail";

export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};
interface UserProviderProps {
  children: ReactNode;
}

interface UserContextType {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
  commandeDetails: CommandeDetail[];
  setCommandeDetails: React.Dispatch<React.SetStateAction<CommandeDetail[]>>;
}
const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User>({
    id: 0,
    username: "",
  });
  const [commandeDetails, setCommandeDetails] = useState<CommandeDetail[]>([]);
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        auth,
        setAuth,
        currentUser,
        setCurrentUser,
        commandeDetails,
        setCommandeDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

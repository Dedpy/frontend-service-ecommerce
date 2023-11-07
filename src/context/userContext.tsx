import React, { useState, createContext, ReactNode } from "react";
import { User } from "../types/user";

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
}
const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User>({
    id: 0,
    username: "",
  });
  console.log("usercontext", currentUser);

  return (
    <UserContext.Provider
      value={{ token, setToken, auth, setAuth, currentUser, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

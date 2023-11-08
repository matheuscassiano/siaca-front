import { IUserContext, IUserState } from "@/interfaces/UserContextInterface";
import { PropsWithChildren, createContext, useState } from "react";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserState>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";

interface UserContextValue {
  name: string;
  userId: string;
}

const UserContext = createContext<UserContextValue>({ name: "", userId: "" });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    name: "agent",
    userId: "123",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;

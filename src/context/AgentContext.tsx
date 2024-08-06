import React, { createContext, useContext, useState } from "react";
import { agent as Agent } from "./fakeData";

const AgentContext = createContext<Agent>(Agent);

export const AgentProvider = ({ children }: { children: React.ReactNode }) => {
  const [agent, setAgent] = useState(Agent);

  return <AgentContext.Provider value={agent}>{children}</AgentContext.Provider>;
};

export default AgentContext;

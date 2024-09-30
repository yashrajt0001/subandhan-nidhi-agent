import React, { createContext, useContext, useEffect, useState } from "react";
import { agent as Agent } from "./fakeData";
import socket from "../lib/socket";
console.log(socket)
const AgentContext = createContext<Agent>(Agent);

export const AgentProvider = ({ children }: { children: React.ReactNode }) => {
  const [agent, setAgent] = useState(Agent);

  // useEffect(() => {
  //   async function getUserId() {
  //     const storedUserId = await AsyncStorage.getItem("userId");
  //     if (storedUserId) {
  //       setAgent((prev) => {
  //         return { ...prev, agentId: storedUserId };
  //       });
  //     }
  //   }
  //   getUserId();
  // }, []);

  useEffect(() => {
    // if (agent.agentId) {
      // const socket = io(SOCKET_HOST);

      // socket.on("connect", () => {
      //   console.log("Socket connected");
      //   console.log(agent.agentId);
      //   socket.emit("EAADB0027AD4AD504A1AA179270D6CED", {
      //     data: { Identifier: agent.agentId },
      //   })
      // });

      socket.on("0280777F37D4F4E7C478D21CEC701463", (data) => {
        const agent = data.data.details.user
        console.log(agent)
        setAgent(prev => ({...prev, 
          name: agent.Name,
          email: agent.Mail,
          phone: agent.Number,
          profile: agent.Profile
        }))
      });
    // }
  }, [agent.agentId]);

  return (
    <AgentContext.Provider value={agent}>{children}</AgentContext.Provider>
  );
};

export default AgentContext;

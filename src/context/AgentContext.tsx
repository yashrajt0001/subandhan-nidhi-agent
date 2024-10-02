import React, { createContext, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSocket } from "../lib/useSocket";

const AgentContext = createContext<Agent | null>(null);

export const AgentProvider = ({ children }: { children: React.ReactNode }) => {
  const socket = useSocket();
  const [userId, setUserId] = useState<string | null>(null)

  const [agent, setAgent] = useState<Agent | null>(null);


  useEffect(() => {
    async function getUserId() {
      const storedUserId = await AsyncStorage.getItem("userId");
      console.log(storedUserId)
      if (storedUserId) {
        setUserId(storedUserId)
      }
    }
    getUserId();
  }, []);

  useEffect(() => {
    if (socket){
      if (userId) {
        socket.on("connect", () => {
          console.log("Socket connected");
          socket.emit("EAADB0027AD4AD504A1AA179270D6CED", {
            data: { Identifier: userId },
          });
        });

        // Agent details
        socket.on("0280777F37D4F4E7C478D21CEC701463", (data) => {
          const agent = data.data.details.user;
          setAgent((prev) => {
              return {
                ...prev,
                name: agent.Name,
                email: agent.Mail,
                phone: agent.Number,
                profile: agent.Profile,
                agentId: agent.Identifier
              }
          });
        });

      
      }
    }
  }, [userId, socket]);

  return (
    <AgentContext.Provider value={agent}>{children}</AgentContext.Provider>
  );
};

export default AgentContext;

import { io } from "socket.io-client";
import { SOCKET_HOST } from "../../env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const socket = io(SOCKET_HOST);
const [initialized, setInitialized] = useState(false);

async function initializeSocket() {
  const storedUserId = await AsyncStorage.getItem("userId");
  socket.on("connect", () => {
    console.log("Socket connected");
    socket.emit("EAADB0027AD4AD504A1AA179270D6CED", {
      data: { Identifier: storedUserId },
    });
  });
  setInitialized(true);
}

export default socket;

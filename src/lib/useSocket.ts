import { useEffect, useState } from 'react';
import { connectSocket, disconnectSocket } from './socket';
import { Socket } from 'socket.io-client';

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = connectSocket();
    setSocket(socketInstance);

    return () => {
      disconnectSocket();
    };
  }, []);

  return socket;
};

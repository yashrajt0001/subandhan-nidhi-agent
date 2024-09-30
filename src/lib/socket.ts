import { io, Socket } from 'socket.io-client';
import { SOCKET_HOST } from '../../env';

let socket: Socket | null = null;

export const connectSocket = (): Socket => {
  if (!socket) {
    socket = io(SOCKET_HOST);
    console.log('socket initialized')
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
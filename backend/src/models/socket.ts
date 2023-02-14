import { Socket as SocketIoClient } from 'socket.io';

export class Socket extends SocketIoClient {
  gameId: string;
  playerId: string;
}

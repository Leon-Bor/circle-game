import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from '../../models/socket';
import { Server } from 'socket.io';
import { ClientRoutes, ServerRoutes } from '../../models/socketRoutes';

@WebSocketGateway({ cors: true })
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() private socket: Server;

  handleConnection(client: Socket, ...args: any[]) {
    console.log('User connected 2', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('User disconnected', client.id);
  }

  @SubscribeMessage(ServerRoutes.PING)
  handlePing(client: Socket, time: number): void {
    console.log('ping');
    client.emit(ClientRoutes.PONG, time);
  }

  @SubscribeMessage(ServerRoutes.START_MOVE)
  handleStartMove(client: Socket, time: number): void {
    console.log('ping');
    client.emit(ClientRoutes.PONG, time);
  }

  @SubscribeMessage(ServerRoutes.STOP_MOVE)
  handleStopMove(client: Socket, time: number): void {
    console.log('ping');
    client.emit(ClientRoutes.PONG, time);
  }
}

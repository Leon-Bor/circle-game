export enum ClientRoutes {
  CONNECT = 'SC_CONNECT',
  DISCONNECT = 'SC_DISCONNECT',
  PONG = 'SC_PONG',
  MOVE = 'SC_MOVE',
}

export enum ServerRoutes {
  CONNECT = 'CS_CONNECT',
  DISCONNECT = 'CS_DISCONNECT',
  PING = 'CS_PING',
  START_MOVE = 'CS_START_MOVE',
  STOP_MOVE = 'CS_STOP_MOVE',
}

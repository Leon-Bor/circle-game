import io from "socket.io-client";
import { ClientRoutes, ServerRoutes } from "../../../common/socketRoutes";

export class SocketService {
  private static _instance: SocketService;
  private socket = io("http://localhost:3000");
  private latency = 0;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public init() {
    console.log("init");

    this.socket.on(ClientRoutes.CONNECT, () => {
      console.log("Socket connected");
      this.socket.emit(ServerRoutes.CONNECT);
    });

    this.socket.on(ClientRoutes.DISCONNECT, () => {
      console.log("Socket disconnected");
    });

    this.socket.on(ClientRoutes.PONG, (time) => {
      this.latency = Date.now() - time;
      console.log(`Pong ${this.latency}ms`);
    });

    setInterval(() => {
      const time = Date.now();
      this.socket.emit(ServerRoutes.PING, time);
    }, 5000);
  }
}

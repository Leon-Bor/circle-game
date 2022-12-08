  
export class SocketService {
  private static _instance: SocketService; 

  public static get Instance() {
    return this._instance || (this._instance = new this());
  } 
}

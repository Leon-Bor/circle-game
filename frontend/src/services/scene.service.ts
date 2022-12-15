export class SceneService {
  private static _instance: SceneService;
  private _scene: Phaser.Scene | undefined = undefined;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public setScene(scene: Phaser.Scene): void {
    this._scene = scene;
  }

  public get scene(): Phaser.Scene {
    if (this._scene) {
      return this._scene;
    } else {
      throw new Error("Can not get scene. No scene is set.");
    }
  }
}

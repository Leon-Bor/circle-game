import { GameObjects, Scene } from "phaser";
import { SceneService } from "../services/scene.service";

export class LoadingScene extends Scene {
  private sceneService = SceneService.Instance;

  constructor() {
    super("loading");
    this.sceneService.setScene(this);
  }

  create(): void {
    this.scene.start("game");
  }
  preload(): void {
    this.load.baseURL = "assets/";

    this.load.image(`bullet`, `images/bullet.png`);
    this.load.image(`battleBackground`, `images/gameField.png`);
    this.load.image(`player`, `images/player.png`);

    this.load.audio("reelStop", "sounds/reel-spin-end.mp3");
  }
}

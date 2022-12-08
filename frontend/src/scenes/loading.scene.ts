import { GameObjects, Scene } from "phaser";

export class LoadingScene extends Scene {
  constructor() {
    super("loading");
  }

  create(): void {
    this.scene.start("game");
  }
  preload(): void {
    this.load.baseURL = "assets/";

    this.load.image(`bullet`, `images/bullet.png`);
    this.load.image(`gameField`, `images/gameField.png`);
    this.load.image(`player`, `images/player.png`);

    this.load.audio("reelStop", "sounds/reel-spin-end.mp3");
  }
}

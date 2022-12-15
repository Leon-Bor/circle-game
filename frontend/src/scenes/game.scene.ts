import { GameObjects, Scene } from "phaser";
import { config } from "../config";
import { BattleBackground } from "../objects/battleBackground";
import { Player } from "../objects/player";
import { SceneService } from "../services/scene.service";
import { Vector } from "../utils/shortcuts";

export class GameScene extends Scene {
  private sceneService = SceneService.Instance;

  protected player: Player;

  public constructor() {
    super("game");
  }

  preload(): void {
    this.sceneService.setScene(this);
  }

  create(): void {
    new BattleBackground();
    this.player = new Player();
    // this.matter.world.setBounds(0, 0, config.width, config.height);
    // this.add.image(0, 0, "gameField").setOrigin(0, 0);
    // const player = this.matter.add.sprite(330, 0, "player", undefined, {
    //   circleRadius: 70,
    //   friction: 0,
    //   frictionAir: 0,
    // });
  }

  update(time: number, delta: number): void {
    this.player.checkDestination();
  }
}

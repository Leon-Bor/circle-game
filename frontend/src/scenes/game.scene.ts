import { GameObjects, Scene } from "phaser";
import { config } from "../config";
export class GameScene extends Scene {
  public constructor() {
    super("game");
  }

  preload(): void {}

  create(): void {
    this.matter.world.setBounds(0, 0, config.width, config.height);
    this.add.image(0, 0, "gameField").setOrigin(0, 0);

    const player = this.matter.add.sprite(330, 330, "player", undefined, {
      circleRadius: 70,
      friction: 0,
      frictionAir: 0,
    });
    player.setVelocityY(-3);
    this.physics.ve;

    Phaser.Physics.Arcade.this.input.on(
      Phaser.Input.Events.POINTER_DOWN,
      () => {
        console.log("pointer down");
      },
      this
    );

    this.input.on("pointerdown", (pointer: any) => {
      const { worldX, worldY } = pointer;
      console.log(worldX, worldY);
    });
  }

  update(time: number, delta: number): void {}
}

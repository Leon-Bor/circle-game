import { SceneService } from "../services/scene.service";
import { Gatgets } from "../utils/gatget";
import { Vector, Point } from "../utils/shortcuts";

export class BattleBackground {
  protected scene = SceneService.Instance.scene;

  protected _sprite: Phaser.GameObjects.Sprite;

  constructor() {
    this.addSprite();
  }

  public addSprite(): void {
    this._sprite = this.scene.add.sprite(0, 0, "battleBackground");
    this._sprite.setOrigin(0, 0);
  }
}

import { SceneService } from "../services/scene.service";
import { Gatgets } from "../utils/gatget";
import { Vector, Point } from "../utils/shortcuts";

export class Player {
  protected scene = SceneService.Instance.scene;

  protected _sprite: Phaser.Physics.Arcade.Sprite;
  protected _moveTween: Phaser.Tweens.Tween;
  protected _isMoving? = false;
  protected _destination?: Phaser.Math.Vector2;

  // Player attributes.
  protected _velocity = 400;

  constructor() {
    this.addSprite();
    this.addInput();
  }

  public addSprite(): void {
    this._sprite = this.scene.physics.add.sprite(300, 600, "player");
  }

  private addInput(): void {
    this._sprite.setInteractive({ draggable: true });

    this.scene.input.on(Phaser.Input.Events.DRAG_START, (pointer: any) => {
      this._isMoving = true;
    });

    this.scene.input.on(
      Phaser.Input.Events.DRAG,
      Gatgets.throttle((pointer: any) => {
        const { worldX, worldY } = pointer;
        const destination = new Vector(Math.round(worldX), Math.round(worldY));
        const position = new Vector(this._sprite.x, this._sprite.y);
        console.log(destination);
        this._destination = destination;

        const angle = Phaser.Math.Angle.BetweenPoints(position, destination);
        this._sprite.rotation = angle;

        const velocity = this.scene.physics.velocityFromAngle(
          Phaser.Math.RadToDeg(angle),
          this._velocity
        );
        if (this._isMoving) {
          this._sprite.setVelocity(velocity.x, velocity.y);
        }
      }, 100)
    );

    this.scene.input.on(Phaser.Input.Events.DRAG_END, (pointer: any) => {
      this._sprite.setVelocity(0, 0);
      this._isMoving = false;
    });
  }

  public checkDestination(): void {
    if (!this._destination) return;
    const deg = this._sprite.rotation;

    const spriteX = this._sprite.x;
    const spriteY = this._sprite.y;
    const destinationX = this._destination.x;
    const destinationY = this._destination.y;

    if (deg >= 0 && deg < Math.PI / 2) {
      // Right to bottom
      if (spriteX > destinationX && spriteY > destinationY) {
        this._sprite.setVelocity(0, 0);
        this._destination = undefined;
      }
    } else if (deg >= Math.PI / 2 && deg < Math.PI) {
      // Bottom to left
      if (spriteX < destinationX && spriteY > destinationY) {
        this._sprite.setVelocity(0, 0);
        this._destination = undefined;
      }
    } else if (deg >= -Math.PI && deg < -Math.PI / 2) {
      // Left to top
      if (spriteX <= destinationX && spriteY <= destinationY) {
        this._sprite.setVelocity(0, 0);
        this._destination = undefined;
      }
    } else if (deg >= -Math.PI / 2 && deg < 0) {
      // Top to right
      if (spriteX > destinationX && spriteY < destinationY) {
        this._sprite.setVelocity(0, 0);
        this._destination = undefined;
      }
    }
  }
}

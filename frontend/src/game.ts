import { Game, Types } from "phaser";
import "phaser/plugins/spine/dist/SpinePlugin";
import "reflect-metadata";
import { config } from "./config";
import { GameScene } from "./scenes/game.scene";
import { LoadingScene } from "./scenes/loading.scene";

const gameConfig: Types.Core.GameConfig = {
  title: "Phaser Circle Game",
  type: Phaser.WEBGL,
  parent: "game",
  backgroundColor: "#101010",
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: config.width,
    height: config.height,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0, x: 0 },
      debug: true,
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: false,
  },
  autoFocus: false,
  audio: {
    disableWebAudio: false,
  },
  scene: [LoadingScene, GameScene],
  plugins: {
    scene: [
      { key: "SpinePlugin", plugin: window.SpinePlugin, mapping: "spine" },
    ],
  },
};

export const game = new Game(gameConfig);

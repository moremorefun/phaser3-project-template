import Phaser from 'phaser';

import Def from './config/Def';

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    // 获取屏幕尺寸
    Def.ScreenWidth = this.cameras.main.width;
    Def.ScreenHeight = this.cameras.main.height;
    console.log(`screen size: ${Def.ScreenWidth}x${Def.ScreenHeight}`);
    // 获取地址栏参数
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    console.log(`url localtion: ${queryString} token: ${token}`);
    // 加载资源
    this.load.image('logo', 'assets/logo.png');
  }

  create() {
    const logo = this.add.image(Def.ScreenWidth / 2, 150, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  scale: {
    width: Def.DesignWidth,
    height: Math.floor(
      (Def.DesignWidth / window.innerWidth) * window.innerHeight,
    ),
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
  },
  scene: MyGame,
};

const game = new Phaser.Game(config);

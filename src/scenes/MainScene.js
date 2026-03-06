import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('logo', 'img/logo.png');
    }

    create() {
        this.logo = this.add.image(300, 300, 'logo');
        this.logo.setOrigin(0.5, 0.5);
    }

    update() {
        this.logo.angle += 0.5;
    }
}

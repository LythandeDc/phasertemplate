import Phaser from 'phaser';
import { MainScene } from './scenes/MainScene.js';

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    parent: 'content',
    backgroundColor: '#2d2d2d',
    scene: [MainScene]
};

new Phaser.Game(config);

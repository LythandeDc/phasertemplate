# Phaser Template

Phaser 4 Empty Template

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - Dev server with hot reload
- `npm run build` - Production build to `dist/`
- `npm run preview` - Preview production build

## Structure

```
src/
├── main.js              # Game config
└── scenes/
    └── MainScene.js     # Main scene
```

## Getting Started

1. Add your assets (images, audio, spritesheets) to the `img/` folder
2. Create new scenes in `src/scenes/` extending `Phaser.Scene`
3. Register them in `src/main.js` by adding to the `scene` array in the config

### Adding a new scene

```js
import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        // this.load.image('key', 'img/file.png');
    }

    create() {
        // Set up your game objects here
    }

    update() {
        // Game loop - runs every frame
    }
}
```

Then in `src/main.js`:

```js
import { GameScene } from './scenes/GameScene.js';

const config = {
    // ...
    scene: [MainScene, GameScene]
};
```

### Switching scenes

```js
this.scene.start('GameScene');
```

### Useful links

- [Phaser API Docs](https://docs.phaser.io/)
- [Phaser Examples](https://labs.phaser.io/)

## Stack

- [Phaser 4](https://phaser.io/) (RC6)
- [Vite](https://vitejs.dev/)

Website: https://itamde.com
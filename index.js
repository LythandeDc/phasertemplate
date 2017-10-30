class Main extends Phaser.State {
	// Charger les assets
	preload() {
		this.game.load.image('logo', 'img/logo.png')
	}

	// Initialiser notre jeu
	create() {
		// Largeur / hauteur
		this.logo = this.game.add.sprite(300, 300, 'logo')
		// On change la position du point de pivot
		this.logo.anchor.setTo(0.5, 0.5)
	}

	// Mouvements & changements
	// 60 FPS
	update() {
		// + 0.5 degré
		this.logo.angle += 0.5
	}
}

// Phaser est basé sur le canvas, et on laisse le régler automatiquement
const GAME = new Phaser.Game(600, 600, Phaser.AUTO, 'content')
// On ajoute notre classe
GAME.state.add('Main', Main)
// On démarre notre jeu
GAME.state.start('Main')

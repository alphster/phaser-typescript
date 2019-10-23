import Phaser from 'phaser'

class MainScene extends Phaser.Scene {
	public preload = (): void => {
		this.load.setBaseURL('http://labs.phaser.io')

		this.load.image('sky', 'assets/skies/space3.png')
		this.load.image('logo', 'assets/sprites/phaser3-logo.png')
		this.load.image('red', 'assets/particles/red.png')
	}

	public create = (): void => {
		this.add.image(800, 600, 'sky').setScale(2, 2)

		const particles = this.add.particles('red')

		const emitter = particles.createEmitter({
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD'
		})

		const logo = this.physics.add.image(400, 100, 'logo')

		logo.setVelocity(100, 200)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)

		emitter.startFollow(logo)
	}
}

class MainGame extends Phaser.Game {
	constructor() {
		super({
			type: Phaser.AUTO,
			width: 1600,
			height: 1200,
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 300 }
				}
			},
			scene: new MainScene('mainScene')
		})
	}
}

new MainGame()

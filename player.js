class Player {
  constructor() {
    this.sprite = game.add.sprite(game.width / 2, game.height - 150, "player");
    this.sprite.anchor.set(0.5, 0.5);
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.drag.set(1550);

    this.weapon = new Weapon.SingleBullet(game);
  }
  update() {
    if (game.input.activePointer.isDown) {
      game.physics.arcade.moveToXY(
        this.sprite,
        game.input.activePointer.x,
        this.sprite.y,
        200, 250
      );
      this.weapon.fire(this.sprite);
    } else {
      this.sprite.body.velocity.x = 0;
    }
  }
}
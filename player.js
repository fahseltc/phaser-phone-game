Player = function(game) {
  Phaser.Sprite.call(this, game, game.width / 2, game.height - 75, "player");
  this.anchor.set(0.5, 0.5);
  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.collideWorldBounds = true;
  this.body.drag.set(1550);

  game.add.existing(this);

  this.weapon = new Weapon.SingleBullet(game);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  if (game.input.activePointer.isDown) {
    game.physics.arcade.moveToXY(
      this,
      game.input.activePointer.x,
      this.y,
      200,
      250
    );
    this.weapon.fire(this);
  } else {
    this.body.velocity.x = 0;
  }
};

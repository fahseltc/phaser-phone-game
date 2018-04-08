Enemy = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "enemy");

  game.add.existing(this);
}

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

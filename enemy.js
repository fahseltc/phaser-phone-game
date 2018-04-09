Enemy = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, "enemy");
  game.physics.enable(this, Phaser.Physics.ARCADE);
  game.add.existing(this);
  this.health = 10;
};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;


Enemy.prototype.update_opacity = function() {
  this.alpha = this.health / 10;
}
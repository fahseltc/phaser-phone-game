Bullet = function(game, key) {
  Phaser.Sprite.call(this, game, 0, 0, key);
  this.scale.set(0.5, 0.5);
  this.anchor.set(0.5, 0.5);
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;
  this.exists = false;
  this.tracking = false;
  this.scaleSpeed = 0;
};

Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.fire = function(x, y, angle, speed, gx, gy) {
  gx = gx || 0;
  gy = gy || 0;

  this.reset(x, y);
  this.scale.set(1);

  this.game.physics.arcade.velocityFromAngle(angle - 90, speed, this.body.velocity);

  this.angle = angle;

  this.body.gravity.set(gx, gy);
};
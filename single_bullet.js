var Weapon = {};

Weapon.SingleBullet = function(game) {
  Phaser.Group.call(
    this,
    game,
    game.world,
    "single_bullet",
    false,
    true,
    Phaser.Physics.ARCADE
  );

  this.nextFire = 0;
  this.bulletSpeed = 600;
  this.fireRate = 200;

  for (var i = 0; i < 64; i++) {
    this.add(new Bullet(game, "bullet"), true);
  }

  return this;
};

Weapon.SingleBullet.prototype = Object.create(Phaser.Group.prototype);
Weapon.SingleBullet.prototype.constructor = Weapon.SingleBullet;

Weapon.SingleBullet.prototype.fire = function(source) {
  if (this.game.time.time < this.nextFire) {
    return;
  }

  var x = source.x + 10;
  var y = source.y + 10;

  var bullet = this.getFirstExists(false);
  if(bullet) {
    console.log(bullet);
    bullet.fire(x, y, 0, this.bulletSpeed, 0, 0);
    this.nextFire = this.game.time.time + this.fireRate;
  }
};
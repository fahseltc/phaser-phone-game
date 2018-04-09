play_state = {
  preload: function() {
    game.load.image("player", "assets/player.png");
    game.load.image("bullet", "assets/bullet.png");
    game.load.image("enemy", "assets/enemy.png");
    game.scale.setupScale(720, 1280);
    game.scale.pageAlignHorizontally = true;
  },
  create: function() {
    this.player = new Player(game);

    this.enemy_group = game.add.group();

    var rows = 4;
    var cols = 5;

    for (var i = 1; i < rows + 1; i++) {
      for (var j = 1; j < cols + 1; j++) {
        this.enemy_group.add(new Enemy(game, 100 * j, 100 * i));
      }
    }
  },
  update: function() {
    this.player.update();

    game.physics.arcade.overlap(
      this.player.weapon,
      this.enemy_group,
      this.handle_bullet_hit_enemy,
      null,
      this
    );
  },

  handle_bullet_hit_enemy: function(bullet, enemy) {
    enemy.damage(2);
    enemy.update_opacity();
    bullet.kill();
    console.log("enemy hit");
  }
};
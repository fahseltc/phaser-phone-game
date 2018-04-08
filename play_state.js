play_state = {
  preload: function() {
    game.load.image("player", "assets/player.png");
    game.load.image("bullet", "assets/bullet.png");
    game.load.image("enemy", "assets/enemy.png");
    game.scale.setupScale(720, 1280)
    game.scale.pageAlignHorizontally = true;
  },
  create: function() {
    this.player = new Player(game);
    this.enemy = new Enemy(game, 100, 100);
  },
  update: function() {
     this.player.update2();
     //https://phaser.io/tutorials/coding-tips-007
  },

  render: function() {

  },
}
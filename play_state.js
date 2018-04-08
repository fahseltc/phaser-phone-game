play_state = {
  preload: function() {
    game.load.image("player", "assets/player.png");
    game.load.image("bullet", "assets/bullet.png");
    game.scale.setupScale(720, 1280)
    game.scale.pageAlignHorizontally = true;
  },
  create: function() {
    this.player = new Player();
  },
  update: function() {
     this.player.update();
     //https://phaser.io/tutorials/coding-tips-007
  },

  render: function() {

  },
}
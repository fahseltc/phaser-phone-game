var conf = {
  width: 720,
  height: 1280,
  renderer: Phaser.CANVAS,
  parent: "game",
  //transparent: false,
  //antialias: false,
  scaleMode: Phaser.ScaleManager.SHOW_ALL //RESIZE//SHOW_ALL //NO_SCALE
};

var game = new Phaser.Game(conf);

game.state.add("play", play_state);
game.state.start("play");

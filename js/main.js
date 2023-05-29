// JS OOP GAME SKELETON

// CANVAS SETUP
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// GLOBAL VARIABLES
let game = new Game();

// START DRAW FUNCTION ON PAGE LOAD
window.addEventListener("load", draw);

function draw() {
  // GAME STATE
  if (game.state === "start") {
    game.startScreen();
  } else if (game.state === "running") {
    game.gameLogic();
    game.gameScreen();
  } else if (game.state === "gameover") {
    game.gameOver();
  }

  // REDRAW
  requestAnimationFrame(draw);
}

// EVENT STUFF

// KEYDOWN EVENT
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  if (game.state === "start" && e.code === "Space") {
    game.state = "running";
  } else if (game.state === "gameover" && e.code === "Space") {
    game = new Game();
  }
}

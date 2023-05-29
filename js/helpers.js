// HELPER CODE

// GAME CLASS
class Game {
  constructor() {
    this.state = "start";
    this.player = new Player(388, 288, 25, 25, "blue", 5);
  }

  startScreen() {
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.font = "48px Calibri";
    ctx.fillStyle = "white";
    ctx.fillText("Press SPACE to Begin!", 100, 300);
  }

  gameLogic() {
    this.player.move();
    this.checkGameOver();
  }

  checkGameOver() {
    // Game over if player leaves canvas
    if (
      this.player.x < 0 ||
      this.player.x + this.player.w > cnv.width ||
      this.player.y < 0 ||
      this.player.y + this.player.h > cnv.height
    ) {
      this.state = "gameover";
    }
  }

  gameScreen() {
    // Background
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Draw Player
    this.player.draw();
  }

  gameOver() {
    // Background
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Game Over Text
    ctx.font = "48px Calibri";
    ctx.fillStyle = "white";
    ctx.fillText("GAME OVER", 100, 300);

    ctx.font = "24px Calibri";
    ctx.fillText("Press SPACE to return to Start Screen.", 100, 350);
  }
}

// PLAYER CLASS
class Player {
  constructor(initX, initY, initW, initH, initColor, initSpeed) {
    this.x = initX;
    this.y = initY;
    this.w = initW;
    this.h = initH;
    this.color = initColor;
    this.speed = initSpeed;
  }

  move() {
    if (keyPressed["ArrowLeft"]) {
      this.x += -this.speed;
    } else if (keyPressed["ArrowRight"]) {
      this.x += this.speed;
    }

    if (keyPressed["ArrowUp"]) {
      this.y += -this.speed;
    } else if (keyPressed["ArrowDown"]) {
      this.y += this.speed;
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

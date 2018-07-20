// Enemies our player must avoid
/*
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
*/

//Modal definition and 'play again' button action
const modalPop = document.querySelector('.modal');
const playButton = document.querySelector('.play-again');
playButton.onclick = function() {
  window.location.reload(true);
}

//enemy constructor
class Enemy {
  constructor(x, y, spd) {
    this.x = x;
    this.y = y;
    this.spd = spd;
    this.sprite = 'images/enemy-bug.png';
  }

  //draws enemies with offset so they appear on game board
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }

  //Sets speed of enemy and resets to beginning when out of bounds
  update(dt) {
    this.posX = this.x > 5;
    if(this.posX) {
      this.x = -1;
    }
    else {
      this.x += this.spd * dt;
    }
  }
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
  constructor () {
    this.x = 2;
    this.y = 4.851;
    this.sprite = 'images/char-boy.png';
  }

  //draws player with offset so it appears on game board
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }

  //game reset location
  reset() {
    this.x = 2;
    this.y = 4.851;
  }

  //checks for collisions -- resets if collision
  update() {
    for (let enemy of allEnemies) {
      if (this.y === enemy.y && (enemy.x > this.x - .5 && enemy.x < this.x + .5)) {
        this.reset();
      } else {
      }
    }
    //check if player wins game
    if (this.y < .5) {
      modalPop.style.display = 'block';
      win.cancelAnimationFrame(main);
    } else {
    }
  }

  //controls movement of player & keeps player in bounds
  handleInput(input) {
    switch(input) {
      case 'left':
        if (this.x > 0) {
          this.x -= 1;
        } else {
        }
      break;

      case 'right':
        if (this.x < 4) {
          this.x += 1;
        } else {

        }
      break;

      case 'up':
        if (this.y > 0) {
          this.y -= 1;
        } else {

        }
      break;

      case 'down':
        if (this.y < 4.851) {
          this.y += 1;
        } else {

        }
        break;
    }
  }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
const player = new Hero();

const enemy1 = new Enemy(-1, .851, 3.5);
const enemy2 = new Enemy(-1, 1.851, 4);
const enemy3 = new Enemy(-1, 2.851, 3);
allEnemies.push(enemy1, enemy2, enemy3);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

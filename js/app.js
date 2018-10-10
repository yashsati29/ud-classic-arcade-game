// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here, The x and y axis and speed of the enemy.
    this.x = x;
    this.y = y;
    this.speed = speed;

    //Image of enemy added to the play feild
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
Enemy.prototype.update = function(dt) {
	//Mutiplies speed by dt on x-axis
	this.x += this.speed * dt;

    //Once enemy reached at the end of the canvas they should reappear with different speeds.
    if(this.x > 510) {
    	this.x = -50;
    	this.speed = 100 + Math.floor(Math.random() * 222);
    };

    //Checking for collision between player and the enemy
    if (player.x < this.x + 80 && player.x + 80 > this.x &&
    	player.y < this.y + 60 && 60 + player.y > this.y) {
    	player.x = 202;
    player.y = 405;
};
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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

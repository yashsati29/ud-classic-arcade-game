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

// Player class added which focuses on x and y axis
var Player = function (x, y) {
    // Variables for the player to move along x and y axis 
    this.x = x;
    this.y = y;

    //The image of the player of char-boy is added as player
    this.player = 'images/char-boy.png';
};

Player.prototype.update = function (dt) {

};

// Renders the image of the player's character into the game
Player.prototype.render = function () {
	ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

// Enables the user to use keyinput to jump from tile to tile
Player.prototype.handleInput = function (keyPress) {

    //Enables the user to move to the left and also checks that the character should not be going off-canvas to left
    if (keyPress === 'left' && this.x > 0) {
    	this.x -= 102;
    };

    //Enables the user to move to the right and also checks that the character should not be going off-canvas to right
    if (keyPress === 'right' && this.x < 405) {
    	this.x += 102;
    };

    //Enables the user to move to the upside on canvas
    if (keyPress === 'up' && this.y > 0) {
    	this.y -= 83;
    };

    //Enables the user to move to the downside and also checks that the character should not be going off-canvas to bottom
    if (keyPress === 'down' && this.y < 405) {
    	this.y += 83;
    };

    //If user sucessfully reached to the top of the canvas i.e. water, then reset the player to its default position on canvas
    if (this.y < 0) {
    	setTimeout(() => {
    		this.x = 202;
    		this.y = 405;
    	}, 800);
    };
};

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

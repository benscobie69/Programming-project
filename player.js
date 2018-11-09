class Player { // Class creation
    constructor(src, x, y, w, h, xSpeed) {  // Creating the objects values for parameters
        this.src = src;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xSpeed = xSpeed;
    }

    drawShip() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);
    }

    shipMovement() {
        if (leftKeyPressed) { // Changes the players x position if the left key is pressed
            this.x -= this.xSpeed;
        }
        if (rightKeyPressed) { // Changes the players x position if the right key is pressed
            this.x += this.xSpeed;
        }
    }

    enemyHit(item) { // Detecting if something is overlapping or if it has collided with it
        return (this.x <= (item.x + item.w) &&
                (this.x + this.w) >= item.x) &&
            (this.y <= (item.y + item.h) &&
                (this.y + this.h) >= item.y);
    }

    hasHitEnemy(enemy) { 
        return this.enemyHit(enemy);
    }

    hasCollided() { //  Using the return value from enemyHit to say yes this class has collided with something in an array
        var self = this;    // Foreach loops aren't fully supported in javascript classes this is a work around
        var collided = false;

        enemies.forEach(function (enemy, i) {   // Loops through an array to detect which object in the array this class has collided
            if (self.hasHitEnemy(enemy)) {  // Runs if there is a collision of any kind with this class and can then be used to detect what type of collision
                if (self.x + self.w > enemy.x && self.x < enemy.x + enemy.w && self.y + self.h > enemy.y && self.y < enemy.y + enemy.h) { //collided with object
                    gameRun = false; // gameover
//                    console.log(gameRun + ' gamerun')
                }
                collided = true;
            }
        }); // End of foreach loop
    }
}   // End of player class


function keyPressed(evt) {  // Checks when the user presses a key and then sets the variable to true
    if (evt.keyCode == LEFT_KEY) { 
        leftKeyPressed = true;
    }
    if (evt.keyCode == RIGHT_KEY) {
        rightKeyPressed = true;
    }
    if (evt.keyCode == SPACE_KEY) {
        spaceKeyPressed = true;
    }
}   // End of key pressed event

function keyReleased(evt) { // Checks for when the key has been released and then changes the variable to false so the player stops moving
    if (evt.keyCode == LEFT_KEY) {
        leftKeyPressed = false;
    }
    if (evt.keyCode == RIGHT_KEY) {
        rightKeyPressed = false;
    }
    if (evt.keyCode == SPACE_KEY) {
        spaceKeyPressed = false;
        drawMake();
    }
}   // End of key released event

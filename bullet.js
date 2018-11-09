 class bullet { // Class creation
     constructor(x, y, w, h, c, ySpeed) { // Creating the objects values for parameters
         this.x = x;
         this.y = y;
         this.w = w;
         this.h = h;
         this.c = c;
         this.ySpeed = ySpeed;
     }
     drawBullet() {
         canvasContext.fillStyle = this.c;
         canvasContext.fillRect(this.x, this.y, this.w, this.h);
     }
     move() {   // Moves the bullet by changing the y position
         this.y -= this.ySpeed;
     }
     outOfBounds() {    // Checks if the bullet has gone out of bounds
         return this.y < 0 || this.y > canvas.height || this.x < 0 || this.x > canvas.width;
     }


     hasHitItem(item) { // Detects if the bullet has collided or is overlapping
         return ((this.x + this.w) >= item.x && this.x <= (item.x + item.w)) // X collision
             &&
             (this.y >= item.y && this.y <= (item.y + item.h)); // Y collision
     }
     hasHitEnemy(enemy) { 
         return this.hasHitItem(enemy);
     }
     hasCollided() {    // Checks  if this class has collided with an enemy, then changes the collided var to true. This function is in the main loop so it is constantly checking if a bullet has collided with an enemy
         var self = this;
         var collided = false;

         enemies.forEach(function (enemy, i) {  // Loops through an array to detect which object in the array this class has collided
             if (self.hasHitEnemy(enemy)) { // Runs if there is a collision of any kind with this class
                 delete enemies[i];
                 collided = true;
                 score++;
                 drawMakeEnemies();
             }
         });

         enemies = enemies.filter(item => item !== undefined);  // When the object is deleted from the array it clears the undefined placeholder
         return collided;

     }  // End of collided function
 }  // End of bullet class

 function drawMake() {  // Function for drawing the bullets

     const BULLET_WIDTH = 6; // Sets the bullet width do 6 
     const BULLET_HEIGHT = 10;  // Sets the bullet height to 10
     var bulletXpos = ship.x + ship.w / 2 - BULLET_WIDTH / 2; // Sets the bullet X position to be on the ship
     var bulletYpos = ship.y - BULLET_HEIGHT;   // Sets the starting Y position to be on the ship
     var bulletYspeed = 5; // Sets the speed of the bullet to 5

     var b = new bullet(bulletXpos, bulletYpos, BULLET_WIDTH, BULLET_HEIGHT, 'white', bulletYspeed);
     bullets.push(b);
 }  // End of the bullet draw function

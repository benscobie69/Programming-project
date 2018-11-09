 class Enemy { // Class creation
     constructor(x, y, w, h, c, ySpeed, delay, delayRate) { // Creating the objects values for parameters
         this.x = x;
         this.y = y;
         this.w = w;
         this.h = h;
         this.c = c;
         this.ySpeed = ySpeed;
         this.delay = delay;
         this.delayRate = delayRate;
     }
     drawEnemy() {
         canvasContext.fillStyle = this.c;
         canvasContext.fillRect(this.x, this.y, this.w, this.h);
     }
     enemyMove() {  // Enemy movement function
         this.y += this.ySpeed;

         if (this.y > canvas.height) {  // If the enemy gets to the bottom of the canvas then run this if statement which puts the enemy back at the top and randomizes its X position and Y speed again
             this.y = 0 - this.h * 5; // Sets the starting Y value just above the top edge of the canvas
             this.x = Math.floor(Math.random() * canvas.width - this.w) // Randomizes the enemies X position to any value within the canvas width
             this.ySpeed = Math.floor(Math.random() * (8 - 3) + 3); // Randomizes the enemies Y speed to any number between 3 and 8
         }  //End of if statement
     }  // End of enemy movement function

 }  // End of enemy class

 function enemySetUp() {    // Function for respawning the enemies
     for (i = 0; i < enemyCount * level; i++) { // If the i value drops below the enemy count then run the draw enemies function
         drawMakeEnemies();
     }
 }  // End of respawn function

 function drawMakeEnemies() {   // Start of draw enemies function

     var eWidth = 25;   // Sets the enemy width to 25 pixels
     var eHeight = 25;  // Sets the enemy height to 25 pixels
     var eXpos = Math.floor(Math.random() * canvas.width - eWidth); // Math.random function radomizes the enemies X position to any value within the canvas width
     var eYpos = 0 - eHeight * 5; // Sets the enemies starting Y position to above the canvas
     var eYspeed = Math.floor(Math.random() * (8 - 3) + 3); // Randomizes the enemies Y speed to any number between 3 and 8
     var delay = 5;
     var delayRate = 0.1; // Sets the delay rate to 0.1

     var e = new Enemy(eXpos, eYpos, eWidth, eHeight, 'red', eYspeed, delay, delayRate);
     enemies.push(e);
     
     if (difficulty == 'easy'){ // If the dificulty is set to easy then the number of enemies stays at 5
         enemyCount = 5;
     }
     
     if (difficulty == 'hard'){ // If the difficulty is set to hard then the number of enemies is changed to 9
         enemyCount = 9;
     }
 }  // End of draw enemies function

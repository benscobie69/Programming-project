class Player{
    constructor(src, x, y, w, h, xSpeed) {
                this.src = src;
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.xSpeed = xSpeed;
            }
    
    drawShip(){
            canvasContext.drawImage(this.src,this.x,this.y,this.w,this.h);
    }
    
    shipMovement() {
       if (leftKeyPressed) { //Move left
           this.x -= this.xSpeed;
       }
       if (rightKeyPressed) { //Move right
           this.x += this.xSpeed;
       }
   }
}


   function keyPressed(evt) {
       if (evt.keyCode == UP_KEY) {
           upKeyPressed = true;
       }
       if (evt.keyCode == DOWN_KEY) {
           downKeyPressed = true;
       }
       if (evt.keyCode == LEFT_KEY) {
           leftKeyPressed = true;
       }
       if (evt.keyCode == RIGHT_KEY) {
           rightKeyPressed = true;
       }
       if (evt.keyCode == SPACE_KEY) {
           spaceKeyPressed = true;
           drawMake();
       }
   }

   function keyReleased(evt) {
       if (evt.keyCode == UP_KEY) {
           upKeyPressed = false;
       }
       if (evt.keyCode == DOWN_KEY) {
           downKeyPressed = false;
       }
       if (evt.keyCode == LEFT_KEY) {
           leftKeyPressed = false;
       }
       if (evt.keyCode == RIGHT_KEY) {
           rightKeyPressed = false;
       }
       if (evt.keyCode == SPACE_KEY) {
           spaceKeyPressed = false;
       }
   }

   

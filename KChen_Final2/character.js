function Character(x, y, image){
    this.x = x;
    this.y = y;
    this.isMoveRight = false;
    this.isMoveLeft = false;
    this.isJump = false;
    this.img = image;

}

Character.prototype.draw = function(){
        
        image(this.img, this.x, this.y);
    }

Character.prototype.jump = function(){
        this.y -= 5;
    }
    

Character.prototype.fall = function() {
        this.y += 5;
    }

Character.prototype.moveLeft = function() {
    this.x = this.x + -4
}

Character.prototype.getX = function(){
    return this.x
}

Character.prototype.getY = function(){
    return this.y
}

Character.prototype.moveRight = function() {
    this.x = this.x + 4
}

Character.prototype.getIsJump = function() {
    return this.isJump
}

Character.prototype.getIsLeft = function() {
    return this.isMoveLeft
}
Character.prototype.getIsRight = function() {
    return this.isMoveRight
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.isMoveLeft = true;
  } else if (keyCode === RIGHT_ARROW) {
    player.isMoveRight = true;
  }
  else if (keyCode == 32){
    player.isJump = true;
  }
}

function keyReleased() {
if (keyCode === LEFT_ARROW) {
    player.isMoveLeft = false;
  } else if (keyCode === RIGHT_ARROW) {
    player.isMoveRight = false;
  }
  else if (keyCode == 32){
    player.isJump = false;
  }
}
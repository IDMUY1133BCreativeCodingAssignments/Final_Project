function Character(x, y, imagePath){
    this.x = x;
    this.y = y;
    this.isMoveRight = false;
    this.isMoveLeft = false;
    this.isJump = false;
    
    //Appended code
    this.sprite = createSprite(0, 160, 41, 39);
    this.sprite.addImage(loadImage(imagePath)); 
}

//
//Character.prototype.setImage = function(custImg){
//    this.sprite.addImage(loadImage(custImg));
//}

Character.prototype.jump = function(){
    this.y -= 3;
}
    

Character.prototype.fall = function() {
    this.y += 3;
}

Character.prototype.moveLeft = function(){
    this.x = this.x + -3
}

Character.prototype.getX = function(){
    return this.x
}

Character.prototype.getY = function(){
    return this.y
}

Character.prototype.moveRight = function(){
    this.x = this.x + 3
}

Character.prototype.getIsJump = function(){
    return this.isJump
}

Character.prototype.getIsLeft = function(){
    return this.isMoveLeft
}

Character.prototype.getIsRight = function(){
    return this.isMoveRight
}

//Character.prototype.changePath = function(newImagePath){
//    this.sprite.addImage(loadImage(newImagePath));
//}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
    player.isMoveLeft = true;
        if (keyCode != 32 || player.y < 200){
        player.isJump = false;
     }
}

    if (keyCode === RIGHT_ARROW) {
    player.isMoveRight = true;
         if (keyCode != 32 || player.y < 200){
        player.isJump = false;
         }
}

    if (keyCode == 32 && player.y >= 160){
player.isJump = true;
        if (keyCode != 32 || player.y < 200){
        player.isJump = false;
    }
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
    return false;
}

//Trying to make a function to be able to pass different images into "player," but it doesn't seem to be working out.

function setBoy(imagePath){
    player.sprite.addImage(loadImage("data/ghostBaby.png"));
    //inserting "ghostBaby" to cover up my oopy
    
    player.sprite = createSprite(0, 160, 25, 46);
    player.sprite.addImage(loadImage(imagePath)); 
}

function setMan(imagePath){
    player.sprite.addImage(loadImage("data/ghostBoy.png"));
    
    player.sprite = createSprite(0, 160, 21, 57);
    player.sprite.addImage(loadImage(imagePath)); 
}
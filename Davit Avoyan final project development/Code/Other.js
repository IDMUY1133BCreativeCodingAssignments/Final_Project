function Other(_maxSpeed, lev_size){
    
    this.other = createSprite(random(-windowWidth, windowWidth), random(0, windowHeight), lev_size, lev_size);  //our other sprite
    
    this.otherAnim = this.other.addAnimation("floating", "assets02/hero01.png", "assets02/hero02.png", "assets02/hero03.png", "assets02/hero04.png", "assets02/hero05.png", "assets02/hero06.png", "assets02/hero07.png", "assets02/hero08.png"); //floating animation
    this.otherAnim.offY = 18;
    
    this.maxSpeed = _maxSpeed;  //how fast do we allow other to go
    this.acceleration_limit = 30;  //tracking and limiting for how long the user can boost the velocity
	
}

Other.prototype.update = function(speed){
    
    this.other.setVelocity(speed, 0);  //horizontal movement. Passing parameter for speed to have 
                                        //different speeds for Others on different levels
    drawSprite(this.other); //draw the Other sprite
    
	
}




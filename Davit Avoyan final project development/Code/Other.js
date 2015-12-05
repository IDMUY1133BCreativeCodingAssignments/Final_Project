function Other(){
    
    this.other = createSprite(windowWidth, windowHeight, lev_size, lev_size);  //our hero sprite
  
    this.otherAnim = this.hero.addAnimation("floating", "assets/ghost_standing0001.png", "assets/ghost_standing0007.png"); //floating animation
    this.otherAnim.offY = 18;
    
    this.other.addAnimation("moving", "assets/ghost_walk0001.png", "assets/ghost_walk0004.png");  //walk cycle

    this.maxSpeed = _maxSpeed;  //how fast do we allow hero to go
    this.acceleration_limit = 30;  //tracking and limiting for how long the user can boost the velocity
	
}

Other.prototype.update = function(){

	
}

Other.prototype.update = function(){
    
    fill(250, 0, 0);

	ellipse(speed.x, speed.y, 20, 20);
}


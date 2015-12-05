function Hero(_maxSpeed, lev_size){
    
    this.hero = createSprite(windowWidth, windowHeight, lev_size, lev_size);  //our hero sprite
  
    this.heroAnim = this.hero.addAnimation("floating", "assets/ghost_standing0001.png", "assets/ghost_standing0007.png"); //floating animation
    this.heroAnim.offY = 18;
    
    this.hero.addAnimation("moving", "assets/ghost_walk0001.png", "assets/ghost_walk0004.png");  //walk cycle

    this.maxSpeed = _maxSpeed;  //how fast do we allow hero to go
    this.acceleration_limit = 30;  //tracking and limiting for how long the user can boost the velocity
}

Hero.prototype.update = function(){
    this.hero.velocity.x = (camera.mouseX-this.hero.position.x)/10;  //utilizing the virtual camera
    this.hero.velocity.y = (camera.mouseY-this.hero.position.y)/10;
    
    text(this.hero.velocity.x, 200, 200); //printing out the speed, so we can start thinking about limiting it, boosting it, etc 
          
}

Hero.prototype.borders = function(){  //constraining our hero
    
  if(this.hero.position.x < 0)
    this.hero.position.x = 0;
  if(this.hero.position.y < 0)
    this.hero.position.y = 0;
  if(this.hero.position.x > SCENE_W)
    this.hero.position.x = SCENE_W;
  if(this.hero.position.y > SCENE_H)
    this.hero.position.y = SCENE_H;
}

Hero.prototype.display = function(){  
    
    //shadow using p5 drawing
    noStroke();
    fill(0,0,0,20);
    //shadow
    ellipse(this.hero.position.x, this.hero.position.y+90, 80, 30);
    //character on the top
    drawSprite(this.hero);
}

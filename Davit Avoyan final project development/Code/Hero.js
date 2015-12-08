function Hero(_maxSpeed, lev_size){
    
    this.hero = createSprite(windowWidth, windowHeight, lev_size, lev_size);  //our hero sprite
  
    this.heroAnim = this.hero.addAnimation("floating", "assets02/hero01.png", "assets02/hero02.png", "assets02/hero03.png", "assets02/hero04.png", "assets02/hero05.png", "assets02/hero06.png", "assets02/hero07.png", "assets02/hero08.png"); //floating animation
    
    this.heroAnim.offY = 18;
    
    this.maxSpeed = _maxSpeed;  //how fast do we allow hero to go
    this.acceleration_limit = 30;  //tracking and limiting for how long the user can boost the velocity
    
    this.hero.lives = 3;  //collision for sprites doesn't really match this. When sprites touch, this number keeps decreasing very fast
                            //is there a way to just decrease by 1 on every touch?
     
    //the bonuses and extras
    this.bg = new Group();
  
    //create extras
    for(this.i=0; this.i<5; this.i++){
      //create a sprite and add the 3 animations
      this.rock = createSprite(random(0, 400), random(0, windowHeight)); 
      //cycles through rocks 0 1 2
      this.rock.addAnimation("extra01", "assets02/extra01.png");
      this.bg.add(this.rock);
    }
}

Hero.prototype.update = function(){
    this.hero.velocity.x = (camera.mouseX-this.hero.position.x)/10;  //utilizing the virtual camera
    this.hero.velocity.y = (camera.mouseY-this.hero.position.y)/10;
    
    textSize(12);
    text(this.hero.velocity.x, 200, 200); //printing out the speed, so we can start thinking about limiting it, boosting it, etc 
    text(this.hero.lives, 300, 300);  //checking how many lives remain
    
}

Hero.prototype.collisionCheck = function(otherSprite){
   /*if(this.hero.overlap(otherSprite)){
       background(0);
   }*/
    
    if(this.hero.overlap(this.bg)){
        //background(0);
        this.hero.lives --;  //in case of collision, lives decrease
       }

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
    drawSprites(this.bg);
    drawSprite(this.hero);

}
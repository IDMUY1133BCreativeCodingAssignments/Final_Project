//first step create the character with images from AI
// have functions within the class for different animations 
//function for the damage and health 

function Character(){
    /*
 //   clear();
  var strawberry;
    this.anim = function(){
        strawberry = createSprite(200,200, 40, 100);
        strawberry.addAnimation("moving", "assets/strawberry_fighter000000.png", "assets/strawberry_fighter000002.png");
        strawberry.addAnimation("floating", "assets/strawberry_fighter000000.png", "assets/strawberry_fighter000000.png");
     //  animation(straw, windowWidth*(1/10),windowHeight*(10/13));// the code links here no problem. it will draw th ellipse but the animation won't load.
    }
  
    this.walking = function(){
        if(mouseX < strawberry.position.x - 10) {
    strawberry.changeAnimation("moving");
    //flip horizontally
    strawberry.mirrorX(-1);
    //negative x velocity: move left
    strawberry.velocity.x = - 2;
  }
  else if(mouseX > strawberry.position.x + 10) {
    strawberry.changeAnimation("moving");
    //unflip 
    strawberry.mirrorX(1);
    strawberry.velocity.x = 2;
  }
  else {
    //if close to the mouse, don't move
    strawberry.changeAnimation("floating");
    strawberry.velocity.x = 0;
  }
    }
    
    
    
    
/*
    
    this.strawberry = function(xloc, yloc){
        image(leftLeg, xloc+10, yloc+50, 110, 110);
        image(leftArm, xloc+30, yloc+25, 110,110);
        image(body, xloc, yloc, 110,110);
        image(rightleg, xloc-10, yloc+50, 110, 110); 
        image(rightArm, xloc-20, yloc+25, 110, 110);
        
        
       
     */   
    
    this.anim = function(){
      //create a sprite and add the 3 animations
  ghost = createSprite(900, (10/14)*windowHeight, 50, 100);
  
  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = ghost.addAnimation("floating", "assets/strawberry_fighter000000.png", "assets/strawberry_fighter000000.png");
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  myAnimation.offY = 18;
  
  ghost.addAnimation("moving", "assets/strawberry_fighter000000.png", "assets/strawberry_fighter000002.png");
        ghost.addAnimation("punch", "assets/strawberry_fighter000003S.png", "assets/strawberry_fighter000003.png");
    
    
    straw = createSprite(200, (10/14)*windowHeight, 50,100);
        
        var myAnimation1 = straw.addAnimation("floating", "assets/strawberry_fighter000000.png", "assets/strawberry_fighter000000.png");
         myAnimation1.offY = 18;
  
  straw.addAnimation("moving", "assets/strawberry_fighter000000.png", "assets/strawberry_fighter000002.png");
        straw.addAnimation("punch", "assets/strawberry_fighter000003.png", "assets/strawberry_fighter000003.png");
    
    
    
    
    
    
    
    
    
    
    }
    
    this.walking = function(){
        
  
  //if mouse is to the left
  if(keyDown (LEFT_ARROW)) {
    ghost.changeAnimation("moving");
    //flip horizontally
    ghost.mirrorX(-1);
    //negative x velocity: move left
    ghost.velocity.x = - 4;
  }
  else if(keyDown(RIGHT_ARROW)) {
    ghost.changeAnimation("moving");
    //unflip 
    ghost.mirrorX(1);
    ghost.velocity.x = 4;
  }
  else {
    //if close to the mouse, don't move
    ghost.changeAnimation("floating");
    ghost.velocity.x = 0;
  }
        if(keyWentDown("m")){
           
            ghost.changeAnimation("punch");
                   ghost.immovable = true;
            straw.bounce(ghost, function(){
                straw.velocity.x = 50;
            });
            
        }else{
            ghost.immovable = false;
            
        }
          if(keyDown ("a")) {
    straw.changeAnimation("moving");
    //flip horizontally
    straw.mirrorX(-1);
    //negative x velocity: move left
    straw.velocity.x = - 4;
  }
  else if(keyDown("d")) {
    straw.changeAnimation("moving");
    //unflip 
    straw.mirrorX(1);
    straw.velocity.x =4;
  }
  else {
    //if close to the mouse, don't move
    straw.changeAnimation("floating");
    straw.velocity.x = 0;
  }
        if(keyWentDown("c")){
           
            straw.changeAnimation("punch");
            straw.immovable = true;
              
            ghost.bounce(straw, function(){
                ghost.velocity.x = 50;
            });
            
        }else{
            straw.immovable = false;
            
        }
        
        
   
       
        
        
       
drawSprites();
    }
  
    
    
    
    
    
//  ghost.addAnimation("spinning", "assets/ghost_spin0001.png", "assets/ghost_spin0003.png");
}
    

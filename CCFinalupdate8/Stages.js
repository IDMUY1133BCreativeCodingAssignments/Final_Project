// bring in the background for the stages 
// create the floor physics
function Stage(){
    
    this.display = function(){
        
        background(0,122,208);
        
        //create a sprite with a placeholder rectangle as visual component
        platform = createSprite((windowWidth/2)+5, (11/12)*windowHeight, 1150, 20);
        //change the color of the placeholder
        platform.shapeColor = color(0,104,55);
        
       
        mySound.setVolume(0.2);
        mySound.play();
      

        

    
  //  ellipse(40, 40, 100, 100);
    }
    this.rest = function(){
        background(0,122,208);
        
        
        fill(66,33,11);// the brown
        rect(0, (12/13)*windowHeight, 1300, windowHeight); 
        
    }
    
    this.boundries = function(){
        fill(0);
        rect(0, 0, 150, windowHeight);
        rect(1300, 0, 500, windowHeight);
    }
}


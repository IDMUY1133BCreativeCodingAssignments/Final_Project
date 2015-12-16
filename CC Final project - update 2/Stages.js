// bring in the background for the stages 
// create the floor physics
function Stage(){
    this.display = function(){
       background(0,122,208);
        fill(0,104,55);
        rect(0, (9/10)*windowHeight, windowWidth, windowHeight);
        fill(66,33,11);
        rect(0, (12/13)*windowHeight, windowWidth, windowHeight);    
    
  //  ellipse(40, 40, 100, 100);
    }
}

// link to the platform subclass
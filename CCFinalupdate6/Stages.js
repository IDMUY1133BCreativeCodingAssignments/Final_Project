// bring in the background for the stages 
// create the floor physics
function Stage(){
    this.display = function(){
       background(0,122,208);//the sky
        fill(0,104,55);//the grass
        rect(0, (9/10)*windowHeight, windowWidth, windowHeight);
        fill(66,33,11);// the brown
        rect(0, (12/13)*windowHeight, windowWidth, windowHeight);    
    
  //  ellipse(40, 40, 100, 100);
    }
    
    
    this.boundries = function(){
        
    }
}


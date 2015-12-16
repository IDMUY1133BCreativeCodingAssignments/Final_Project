// bring in the background for the stages 
// create the floor physics
function Stage(){
    this.display = function(){
        
       background(0,122,208);
        fill(0,104,55);//the grass
        rect(0, (9/10)*windowHeight, 1300, windowHeight);
        fill(66,33,11);// the brown
        rect(0, (12/13)*windowHeight, 1300, windowHeight); 
        
        

    
  //  ellipse(40, 40, 100, 100);
    }
    
    
    this.boundries = function(){
        fill(0);
        rect(0, 0, 150, windowHeight);
        rect(1300, 0, 500, windowHeight);
    }
}


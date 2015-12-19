//Isabel Chen: Creative Coding Final Project: due 17 December 2015 

/* This project will use the kinect for its interactivity.
  It will simulate disturbances in the human population and show how people remain united together*/

//REFERENCES
//https://processing.org/examples/simpleparticlesystem.html
//Dan Shiffman's YouTube videos


Dot[] dots;


void setup(){
  size(800, 800);
  
} // void setup()

void draw(){
  background(255);
  
  //dots.append(); //error: can't invoke append on array type
  //how can I add new particles??
  
  //this for loop does not work...
  for (int i = 0; i < 10; i++){ 
    dots[i] = new Dot(mouseX, mouseY);
    
  }
  
  //PSEUDOCODE
  //put the particles into a square
  //add functions that will track kinect movements and change the particles
  //add a function that will make the particles return to the original shape
  //think about what will happen over time, beyond just moving particles
  //keep it engaging and interesting
  
} //void draw()

 
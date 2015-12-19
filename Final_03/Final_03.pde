//Isabel Chen: Creative Coding Final Project: due 17 December 2015 

/* This project will use the kinect for its interactivity.
  It will simulate disturbances in the human population and show how people remain united together*/

//REFERENCES
//https://processing.org/examples/simpleparticlesystem.html
//Dan Shiffman's YouTube videos
//https://www.processing.org/tutorials/2darray/

//Dot[][] dots = new Dot[400][400]; //setting up the 2D array
Dot[][] dots = new Dot[400][400]; //temporary smaller array for program to run faster


void setup(){
  size(800, 800);
  for(int i = 0; i < 400; i+= 100){ //i < 400
    for(int y = 0; y < 400; y+= 100){ //y < 400
      dots[i][y] = new Dot(i + 200, y + 200, 10, 5);
    }
  }
} // void setup()

void draw(){
  background(232, 192, 168); 
 
 
  square();
  

  
  //PSEUDOCODE
  //when mouse moves through the square, the particles break apart
    //should I use an array or for loop??
  //add functions that will track kinect movements and change the particles
  //add a function that will make the particles return to the original shape
  //think about what will happen over time, beyond just moving particles
  //keep it engaging and interesting
  
} //void draw()

void square(){ //put particles in a square
  float d;
  
  for(int i = 0; i < 400; i+= 100){ // i < 400
    for(int y = 0; y < 400; y+= 100){ // y < 400
       
      dots[i][y].display();
      dots[i][y].moveAway();
      dots[i][y].update();
    }
  }
  
} //void square()
 
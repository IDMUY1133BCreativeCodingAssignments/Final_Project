//Isabel Chen: Creative Coding Final Project: due 17 December 2015 

/* This project will use the kinect for its interactivity.
 It will simulate disturbances in the human population and show how people remain united together*/

//REFERENCES
//https://processing.org/examples/simpleparticlesystem.html
//Dan Shiffman's YouTube videos
//Dot[][] dots = new Dot[400][400]; //setting up the 2D array
int size = 600; //size of array
int increase = 10; //amount increased through each for loop
int click = 0;
int value = 0;

int i = 0;
int y = 0;

color orange = color(232, 192, 168);
color blue = color(66, 89, 178);
color pink = color(241, 180, 194);

Dot[][] dots = new Dot[size][size]; //temporary smaller array for program to run faster


void setup() {
  size(800, 800);
  //frameRate(120);
  
  for (int i = 0; i < size; i+= increase) { //i < 400
    for (int y = 0; y < size; y+= increase) { //y < 400
      dots[i][y] = new Dot(i + 100, y + 100, 10, 5);
    }
  }
} // void setup()

void draw() {

  if (click == 0) {
    background(orange); 
    square();
  }
  if (click == 1) {
    background(blue);
    square1();
  }
  if (click == 2){
    background(pink);
    square2();
  }

    //PSEUDOCODE
    //when mouse moves through the square, the particles break apart
    //add a function that will make the particles return to the original shape
    //think about what will happen over time, beyond just moving particles
    //keep it engaging and interesting // :(
} //void draw()

void keyReleased() {
  if(key == 32)
  {
    background(255);
    reset();
    square();
  }
    
  
}

void square() { //repel

    for (int i = 0; i < size; i+= increase) { // i < 400
      for (int y = 0; y < size; y+= increase) { // y < 400

        dots[i][y].display();
        dots[i][y].moveAway();
        dots[i][y].update();
      }
    }
    
    button(15, 25, orange);
    button(50, 25, blue);
    button(95, 25, pink);
    
} //void square()

void square1() { //attract

    for (int i = 0; i < size; i+= increase) { // i < 400
      for (int y = 0; y < size; y+= increase) { // y < 400
        dots[i][y].display();
        dots[i][y].moveClose();
        dots[i][y].update();
      }
    }
    button(15, 25, orange);
    button(50, 25, blue);
    button(95, 25, pink);
} //void square()

void square2(){ //drops
   for (int i = 0; i < size; i+= increase) { // i < 400
      for (int y = 0; y < size; y+= increase) { // y < 400

        dots[i][y].display();
        dots[i][y].move();
        dots[i][y].update();
      }
    }
    button(15, 25, orange);
    button(50, 25, blue);
    button(95, 25, pink);
} //void square2()

/***reset does not work... */
void reset(){ //reset the variables so that it returns to a grid
  for (int i = 0; i < size; i+= increase) { //i < 400
    for (int y = 0; y < size; y+= increase) { //y < 400
      dots[i][y] = new Dot(i + 100, y + 100, 10, 5);
    }
  }
} //void reset()

void button(int buttonX, int buttonY, color b){ //select which color
  fill(b);
  ellipse(buttonX, buttonY, 25, 25);
  
}//void button()

void mouseClicked(){ //selecting buttons!

  if((mouseX < 28) && (mouseX > 2) && (mouseY < 39) && (mouseY > 13)){
    click = 0;
  }
  if((mouseX < 63) && (mouseX > 47) && (mouseY < 39) && (mouseY > 13)){
    click = 1;
  }
  if((mouseX < 108) && (mouseX > 82) && (mouseY < 39) && (mouseY > 13)){
    click = 2;
  }
}
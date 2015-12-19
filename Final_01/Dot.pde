//Processing class reference: https://processing.org/reference/class.html

class Dot{
  
  //GLOBAL VARIABLES
  float xpos, ypos, lifespan;
  PVector location, velocity, acceleration;
  
  //CONSTRUCTOR
  Dot(float x, float y){
    ypos = y;
    xpos = x;
    location = new PVector(x, y);
    velocity = new PVector(random(-2, 1), random(-2, 0));
    acceleration = new PVector(0, 0.05);
    
    lifespan = 255.0;
  } //Dot()
  
  //FUNCTIONS
  void update() {
    velocity.add(acceleration);
    location.add(velocity);

    lifespan -= 3;
  } //void update()

 
  void display() {
    noStroke();
    fill(222, 178, 62, lifespan); //lifespan is from 255 to 0, works as alpha
    triangle(location.x, location.y, location.x - 8, location.y-8, location.x + 5, location.y - 5);

  
  } //void display()
  
  
} //class Dot
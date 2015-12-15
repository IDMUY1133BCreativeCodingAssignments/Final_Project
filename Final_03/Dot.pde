//Processing class reference: https://processing.org/reference/class.html
//Agent and Enemy example

class Dot{
  
  //GLOBAL VARIABLES
  int max;
  float xpos, ypos, maxSpeed, maxForce;
  PVector location, velocity, acceleration;
  boolean tempX = false;
  boolean tempY = false;

  
  //CONSTRUCTOR
  Dot(float x, float y, float _maxSpeed, float _maxForce){
    ypos = y;
    xpos = x;
    location = new PVector(x, y);
    velocity = new PVector(0, 0);
    acceleration = new PVector(0, 0);
    
    maxSpeed = _maxSpeed;
    maxForce = _maxForce;
    max = 10;
  } //Dot()
  
  //FUNCTIONS
  void update() {
    velocity.add(acceleration);
    velocity.limit(max);
    location.add(velocity);
    acceleration.mult(0);

  
  } //void update()

 
  void display() {
  
      noStroke();
      fill(111, 114, 127);
      ellipse(xpos, ypos, 20, 20);
      
  } //void display()
  
  void moveAway(){ // if the cursor touches the dots, moves away

    //if mouse is within a certain radius of each individual dot,
    //then the dot will move away
    if(mouseX == xpos){
      tempX = true;
    }
    if(mouseY == ypos){
      tempY = true;
    }
    
      
    //test to see if program recognizes the dot placements with mouse  
    if((tempX == true) && (tempY == true)){
      print("true");
      xpos += 10;
      ypos += 10;
    } else {
      print("where?");
    }
      
    
  
    /*PVector target = new PVector(mouseX, mouseY);
    PVector desired = PVector.sub(target, location);
    float d = desired.mag();
    if (d < 100){
      float m = map(d, 0, 100, 0, maxSpeed);
      desired.setMag(m);
    } else {
      desired.setMag(maxSpeed);
    }
    
    PVector steer = PVector.sub(desired, velocity);
    steer.limit(maxForce);
    acceleration.add(steer);
    */
  
    
    
  } //void moveAway()
  
  void moveBack(){
    
  } //void moveBack()
  
  
} //class Dot
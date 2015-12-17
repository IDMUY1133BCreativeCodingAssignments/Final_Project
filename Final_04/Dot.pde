/*
*
*I tried using vectors but it doesn't work :(
*
*/

//Processing class reference: https://processing.org/reference/class.html
//Agent and Enemy example


float gravity = 0.11;
float friction = -0.94;;

class Dot{
  
  //GLOBAL VARIABLES
  int max, rad;
  float xpos, ypos,  maxSpeed, maxForce, xpos_, ypos_;
  PVector location, velocity, acceleration, mouse;
  boolean tempX = false;
  boolean tempY = false;
  
  float vx, vy;

  
  //CONSTRUCTOR
  Dot(float x, float y, float _maxSpeed, float _maxForce){
    ypos = y;
    xpos = x;
    mouse = new PVector(mouseX, mouseY);
    float mappedX = map (mouseX, 0, width, -50, 50);
    float mappedY = map (mouseY, 0, height, -50, 50);
    location = new PVector(mappedX, mappedY);
    velocity = new PVector(random(-10, 20), random(20,-20));
    acceleration = new PVector(0, -0.05);
    
    maxSpeed = _maxSpeed;
    maxForce = _maxForce;
    max = 10;
    
    rad = 20; //radius of the circle
    
    vx = 0;
    vy = 0;
    
    
  } //Dot()
  
  //FUNCTIONS
  void update() {
    //velocity.add(acceleration);
    velocity.limit(max);
    //location.add(velocity);
    acceleration.mult(0);

  
  } //void update()

 
  void display() {
  
      noStroke();
      if((mouseX < xpos + rad) && (mouseX > xpos - rad) && (mouseY < ypos + rad) && (mouseY > ypos - rad)){
        fill(108, 196, 229);
      } else {
        fill(111, 114, 127);
      }
      //float mappedX=map(mouseX,0,width,-5,5);
      //float mappedY=map(mouseY,0,height,-5,5);
      ellipse(xpos, ypos, rad/2, rad/2);
      
      
  } //void display()
  
  void moveAway(){ // if the cursor touches the dots, moves away

    //if mouse is within a certain radius of each individual dot,
    //then the dot will move away
    if((mouseX < xpos + rad) && (mouseX > xpos - rad) && (mouseY < ypos + rad) && (mouseY > ypos - rad)){
        tempX = true;
        tempY = true;
        xpos += random(-50, 50);
        ypos += random(-50, 50);
        print(xpos);
        //translate(20, 20);

        //print("true"); //test to see if program recognizes the dot placements with mouse  
     } else {
         tempX = false;
         tempY = false;
     }
  
  } //void moveAway()
  
  void moveClose(){ //interacted dots move towards the mouse
    if((mouseX < xpos + rad) && (mouseX > xpos - rad) && (mouseY < ypos + rad) && (mouseY > ypos - rad)){
        tempX = true;
        tempY = true;
        float a = sq(rad);
        xpos = mouseX + PI*a;
        ypos = mouseY + PI*a;
        //print("true"); //test to see if program recognizes the dot placements with mouse  
     } else {
         tempX = false;
         tempY = false;
     }
  } //void moveClose()
    
  void move() { //the whole thing falls down due to gravity
    vy += gravity;
    xpos += vx;
    ypos += vy;
    if (xpos + rad/2 > width) {
      xpos = width - rad/2;
      vx *= friction; 
    }
    else if (xpos - rad/2 < 0) {
      xpos = rad/2;
      vx *= friction;
    }
    if (ypos + rad/2 > height) {
      ypos = height - rad/2;
      vy *= friction; 
    } 
    else if (ypos - rad/2 < 0) {
      ypos = rad/2;
      vy *= friction;
    }
  }
  
  
} //class Dot
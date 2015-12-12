// Declare and construct two objects (h1, h2) from the class HLine 
HLine h1 = new HLine(0, 20); 
HLine h2 = new HLine(0, 30); 
 
void setup() 
{
  size(1000, 1000);
  frameRate(30);
}

void draw() { 
  background(204);
  h1.update(); 
  h2.update();  
} 
 
class HLine { 
  float r, d; 
  HLine (float y, float s) {  
    r = y; 
    d = s; 
  } 
  void update() { 
     r = r+.1;
  background(0);
 
 rectMode(CENTER);

 translate(mouseX,mouseY) ;
 
 fill(255);
 float d= 20;
d = d+ abs((mouseX-pmouseX)*2);
println(d);
rotate(d/50);
fill(255);
 rect(0,0,d,d);
 rect(100,0,d,d);
 rect (0,100,d,d);
 rect(100,100,d,d);
  
 rect(-100,0,d,d);
 rect (0,-100,d,d);
 rect(-100,-100,d,d);
 if(d>70){
   fill(30,100,255);
   rect(0,0,300,300);
   noFill();
  } 

  }
}
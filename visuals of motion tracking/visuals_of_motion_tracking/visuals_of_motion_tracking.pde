/*My idea for this is that instead of using a mouse movement as the varible of change i would use how much 
a person is moving with motion tracking to move the objects and have it on 4 walls of a room
i also am thinking of using different regions of the camera space to do different things like a movement of the right would 
move the right rectangle.*/


void setup(){
  size (500,500);
  
}

void draw(){
  noStroke();
  background(0);
  int x = mouseX/3;
int y = 500;
int x1 = 500;
int y1 = mouseY/3;
fill(x,20,100);
  rect(0, 0, x, y);
  fill(40,x,100);
  rect(0,0,x1,y1);
  fill(100,20,x);
  rect (0,500,500,-y1);
  fill(200,x,x);
  rect (500,0,-x,500);
  fill(x,50,x);
  ellipse(width/2, height/2, x, x);
}
  
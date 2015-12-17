float oldX, oldY;
float a=0;
int x;
int y;
color c;


   
void setup() {
  size(800, 800);
  background(255);
}

void draw() {
  //http://www.openprocessing.org/sketch/26533
  if (mousePressed==true) {
    fill(0);
    strokeWeight(8);
    line(oldX, oldY, mouseX, mouseY);

   //println(length);
  }
 
  oldX = mouseX;  //save the last mouse position for the next frame of animation
  oldY = mouseY;
  loadPixels();
  //trying to see if I can print the color of every pixel when a key is pressed
  /*once I can figure out how to get every pixel's color, 
  I can start working on counting the number of non-white pixels, adding them up and storing it
  */
  if(keyPressed==true){ 
for(x=0;x<width;x++){
  for(y=0;y<height;y++){
 c=get(x,y);
 println(c);
  }
  }
}
}





  
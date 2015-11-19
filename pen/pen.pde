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
  }
  oldX = mouseX;  //save the last mouse position for the next frame of animation
  oldY = mouseY;

//loadPixels();
//int dimension= width*height;
//for(int i=0;i<dimension; i++){
//pixels[i]=printArray(pixels);

/*
//}
//updatePixels();

loadPixels();
for(int i=0;i<(width*height/2)-width/2;i++){
pixels[i]=color(255,255,0);
updatePixels();

printArray(pixels);
}

 */
  }


  
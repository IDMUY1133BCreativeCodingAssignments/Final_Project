int x = 100;
int sub = 1;
 
Wwitch == true;


void setup() {
  size(400, 400);
  background(10, 10, 60);
}

void draw() {
  rectMode(CORNER);
  fill(255);
  rect(width/2, height/2, 100, 40);
  fill(255, 0, 0);
  rect(width/2, height/2, x, 40);

  if ( mousePressed ) {
    x = x - sub;
  } 
   else {
    x = x;
  } if ( x <= 0)
  x = 0;
  println( x + "%");
}


void trans();
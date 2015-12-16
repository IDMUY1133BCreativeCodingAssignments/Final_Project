int x;
int x2;


void setup() {
  size(400, 400);
  background(255);
}

void draw() {
  fill(0);
  rect(0, 0, x, 200);
  fill(175);
  rect(400, 200, x2, 200);

  if ( mousePressed ) {
    x = x + 10;
    x2 = x2 - 10;
    println("Ye");
  }
  
}
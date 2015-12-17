int x;
int x2;
int x3;
int x4;
int x5;

void setup() {
  size(700, 500);
  background(0);
}

void draw() {
  fill(174);
  rect(0, 0, x, 100); // GOING RIGHT
  rect(500, 200, x2, 100); // GOING LEFT
  fill(255, 175);
  rect(0, 100, x3, 100); // GOING RIGHT
  rect(500, 300, x4, 100); // GOING LEFT
  rect(500, 400, x5, 100); // GOING LEFT



  if ( mousePressed ) {
    x = x + 25  ;
    if ( x > 500 ) {
      x = 500;
    }
    x3 = x3 + 30;
    if ( x3 > 500 ) {
      x3 = 500;
    }

    println("Ye");
  }
}
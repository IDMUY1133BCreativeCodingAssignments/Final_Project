PFont font1;
boolean facts = false;
boolean transState = false;
boolean transState2 = false;
int trans1;
int trans2;
int trans3;
int trans4;

void setup() {
  size(1000, 400);
  font1 = createFont("Minecraft.ttf", 32);
}

void draw() {
  // DEFAULT THIS
  textAlign(CENTER, CENTER); // CENTERS TEXT
  smooth();
  textFont(font1);     // LOAD MINECRAFT TEXT FONT
  background(255);
  StartMenu();

}

void StartMenu() {
  // STATIC CONDITION
  fill(0);
  text("Please Hold Space", width/2, height/2 + 70);
  // ACTIVE CONDITION ( CLEAN UP )

  //  if (mouseX > 410 && mouseX < 630 && mouseY > 285 && mouseY < 250) {
  if ( keyPressed ) {
    if ( key == 32 );
    facts = true;
    Trans(); 
  } else if ( facts = facts ) {
    background(255);
    //text("Please hold Space", width/2, height/2 + 70);
  }

  println("yes!");
}


void Trans() {
  rectMode(CORNER);
  noStroke();
  fill(0);
  rect(0, 0, trans1, 1000);
  rect(0, 200, trans2, 1000);
  //fill(255,0, 0);
  fill(0);

  rect(0, 0, trans3, 1000);
  rect(0, 200, trans4, 1000);

  trans1 = trans1 + 15;
  println("+20");
  if ( trans1 > 1000 ) {
    trans1 = 1000;
    transState2 = true;
    println("?");
    if ( transState = true ) {
      trans3 = trans3 + 15;
      trans4 = trans4 + 15;
    }
  }
  trans2 = trans2 + 15;
  if ( trans2 > 1000 ) {
    trans2 = 1000;
  }
}
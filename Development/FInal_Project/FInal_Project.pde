// IMPORTS
import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

// Final Project by Jonatan Wu                                                                
// Vertical Shooter  
/*
 */

// --------------------------------------------------------------------------VARIABLES------------------------------------------------------------------------//

// BACKGROUND                                                                           
PImage bng;     
// TRANSITIONS
color c = color(255);
float limit = 1;
float limit2 = 255;

int trans1;
int trans2;



// MOTION VARS  
int x = 400/2;
int y = 400/2;
// SHIP VAR
PImage Ship_1;


// BOSS VARS
PImage Boss_1;
float bossxpos;
float bossypos;
// Direction
int bossx = 1;
int bossy = 1;
// Speed
float bossSpeedx = 2.8;
float bossSpeedy = 2.2;
int bossw = 50;


// TARGET VARS
PImage Aim;
// FONTS
PFont font1;
// MISC
PImage Blast1;
// SOUNDS VARS
Minim minim;
AudioPlayer sound1;
AudioPlayer shot1;

// VECTOR VARS
// VECTOR MOTION INSPIRED BY : http://studio.processingtogether.com/sp/pad/export/ro.91kLmk61vAOZp/latest
PVector pos = new PVector();
PVector speed = new PVector();
int ship_val = 3;
// SHIP RADIUS USED FOR THE SIZE
int ship_radius = 50;
// OTHERS
boolean screenCross = true;
int increment = 4;
// State change
int count = 0;

// 


void setup() {
  // IMAGES
  Ship_1 = loadImage("Ship_1.png");
  Boss_1 = loadImage("Boss_1.png");
  Aim = loadImage("Aim.png");
  bng = loadImage("Map_1.jpg");
  Blast1 = loadImage("Blast_1.png");

  // FONTS
  font1 = createFont("Minecraft.ttf", 32);

  // SOUNDS
  minim = new Minim(this);
  sound1 = minim.loadFile("Thunderforce.mp3");
  shot1 = minim.loadFile("Pew.mp3");

  // DEFAULTS
  size(500, 500);
  background(255);  
  // sets the value of x and y to be whereever
  pos.set(width/2, height/2 + 200);
  noCursor();
  sound1.play();

  bossxpos = width/2;
  bossypos = height/2 - 70;
}

void draw() {
  frameRate(30);
  imageMode(CENTER);
  ellipseMode(CENTER);
  background(bng);
  updateShip();
  StateChange();
  stage1();  
  confineObjects();
  displayShip();
  StartMenu();
  Aim();
}
// GOOD
void updateShip() {
  // pos vector is added onto the speed vector
  // so whatever the value of pos is, it's added onto the speed value
  // which is initally 0, so 0 + x will give me motion
  pos.add(speed);
}
// GOOD
void displayShip() {
  // Filling in with the ship image, instead of a shape
  image(Ship_1, pos.x, pos.y, ship_radius, ship_radius);
  //ellipse(pos.x, pos.y, ship_radius, ship_radius);
}
// GOOD
void keyPressed() {
  // k is using keyCodes, requires inputs such as LEFT, RIGHT, UP, DOWN
  final int k = keyCode;
  // if any ADWS or arrow keys are pressed, the speed with either
  // add the vel value or subtract it. Similar to y = y + 10
  if      (k == LEFT  |  k == 'A')    speed.x = -increment; 
  else if (k == RIGHT |  k == 'D')    speed.x =  increment;
  else if (k == UP    |  k == 'W')    speed.y = -increment;
  else if (k == DOWN  |  k == 'S')    speed.y =  increment;

  screenCross = !screenCross;

  // Trans
}
// GOOD
void keyReleased() {
  final int k = keyCode;

  if ( k == LEFT    |  k == 'A'  &&  speed.x < 0 
    || k == RIGHT   |  k == 'D'  &&  speed.x > 0 )
    speed.x = 0;

  else if ( k == UP |  k == 'W'  &&  speed.y < 0 
    || k == DOWN    |  k == 'S'  &&  speed.y > 0 )
    speed.y = 0;
}
// GOOD
void confineObjects() {
  // if screenCross is true
  if (screenCross) {
    // SHIP CONFINE
    // if screenCross is true and if the x position is > width
    // then make the position 0
    if (pos.x > width)   pos.x = 0;
    // otherwise if the x position is < than 0, then make the position
    // the full length of width
    else if (pos.x < 0)  pos.x = width;

    // if the y position is > the height, make it the height - 20
    // Prevents player from cheating
    if (pos.y > height)  pos.y = height - 20;
    // if the y position is < 0 then make it stay at 20
    // Prevents player from cheating
    else if (pos.y < 0)  pos.y = 50;
  }
}

// OK
void StartMenu() {
  // DEFAULT THIS
  textAlign(CENTER, CENTER); // CENTERS TEXT
  smooth();
  noFill();
  textFont(font1);           // LOAD MINECRAFT TEXT FONT
  stroke(3);
  textSize(120); // FLY text
  // STATIC CONDITION
  textSize(32);
  fill(0); 
  text("Start Game", width/2, height/2 + 50);
  rectMode(CENTER);
  fill(255, 100);
  rect(500/2, 500/2 + 50, 200, 40, 250); // START MENU
  // ACTIVE CONDITION ( CLEAN UP )
  if (mouseX > 150 && mouseX < 350 && mouseY < 320 && mouseY > 280) {
    fill(255, 0, 0);
    text("Start Game", width/2, height/2 + 50);
  }
}

// FIX 
void Play() {
  background(255);
  sound1.play();
  stage1();
  updateShip();
  confineObjects();
  displayShip();
  Aim();
}


void stage1() {

  bossxpos = bossxpos + ( bossSpeedx * bossx);
  bossypos = bossypos + ( bossSpeedy * bossy);
  // BOSS CONFINE
  if ( bossxpos > width - bossw || bossxpos < bossw) {
    bossx *= -1;
  }
  if ( bossypos > height - bossw || bossypos < bossw ) { 
    bossy *= -1;
  }
  image(Boss_1, bossxpos, bossypos, bossw, bossw);
  
}


void Trans() {
  
  fill(0);
  rect(0, 0, trans1, 250);
  rect(0, 250, trans2, 250);
  if ( trans1 > 500 ) {
    trans1 = 500;
  }

  trans2 = trans2 + 25;
  if ( trans2 > 500 ) {
    trans2 = 500;
  }
  
}



// GOOD
void Aim() {
  
  image(Aim, mouseX, mouseY);
  Aim.resize(10, 10);
  println("The x cord is  " + mouseX, "The y cord is  " + mouseY);
  
}

void StateChange() {
  switch (count) {
  case 1:
    Play();
    break;
  case 2:
    Trans();
    break;
  case 3:
    Play();
    break;
  }
}

void mousePressed() {
  
  count++;
  trans1 = trans1 + 100;
  trans2 = trans2 + 100;
  
}
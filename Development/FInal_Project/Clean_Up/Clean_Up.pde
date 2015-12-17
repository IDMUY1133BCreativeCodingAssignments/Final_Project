// IMPORTS
import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

import java.util.List;

// Final Project by Jonatan Wu                                                                
// SOUNDS VARS
Minim minim;
AudioPlayer sound1;
AudioPlayer maintrack;

PFont font1;                                                                
PImage bng;      // Background;
PImage Ship_1;
PImage Boss_1;
PImage Aim;

int trans1;
int trans2;
int trans3;
int trans4;
int x, y;

float bossxpos;
float bossypos;

// Direction
int bossx = 1;
int bossy = 1;

// Speed
float bossSpeedx = 2.8;
float bossSpeedy = 2.2;
int bossw        = 10;

// VECTOR VARS
// VECTOR MOTION INSPIRED BY : http://studio.processingtogether.com/sp/pad/export/ro.91kLmk61vAOZp/latest
PVector pos   = new PVector();
PVector speed = new PVector();
int ship_val  = 3;

// SHIP RADIUS USED FOR THE SIZE
int ship_radius = 50;

// PARTICLE SYSTEM
int bulletvalue     = 5;
int bulletDim       = 4;
int bulletFreq      = 2;
PVector bulletpos   = new PVector();
PVector bulletspeed = new PVector();
boolean active;

//   List<Bullet> bullets = new ArrayList();
//   List<Integer> bulletPool = new ArrayList();

// OTHERS
boolean screenCross = true;
int increment = 4;

// State change
int count = 0;
boolean transState  = false;
boolean transState2 = false;
boolean start       = false;
boolean facts       = false;

void setup() {
  // IMAGES
  Ship_1 = loadImage("Ship_90.png");
  Boss_1 = loadImage("Boss_90.png");
  Aim    = loadImage("Aim.png");
  bng    = loadImage("Map_90.1.png");
  // FONTS
  font1  = createFont("Minecraft.ttf", 32);

  // SOUNDS
  minim     = new Minim(this);
  sound1    = minim.loadFile("Thunderforce.mp3");
  maintrack = minim.loadFile("Rim.mp3");

  size(1000, 400);
  // background(255);  
  // sets the value of x and y to be whereever
  pos.set(width/2, height/2);
  noCursor();
  sound1.play();

  bossxpos = width/2 -70;
  bossypos = height/2;
}
void draw() {
  frameRate(100);
  textAlign(CENTER, CENTER); // CENTERS TEXT
  smooth();
  textFont(font1);     // LOAD MINECRAFT TEXT FONT
  back();
  imageMode(CENTER);
  ellipseMode(CENTER);
  //background(bng);
  updateShip();
  // StateChange();  
  confineObjects();
  displayShip();
  StartMenu();
  Aim();
  /*
  if ( mousePressed && frameCount % bulletFreq == 0) addBullet();
   
   int b = bullets.size();
   
   while ( b -- != 0) if (bullets.get(b).script());
   */
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
    if (pos.x > width)   pos.x = width - 20;
    // otherwise if the x position is < than 0, then make the position
    // the full length of width
    else if (pos.x < 0)  pos.x = 20;

    // if the y position is > the height, make it the height - 20
    // Prevents player from cheating
    if (pos.y > height)  pos.y = height - 20;
    // if the y position is < 0 then make it stay at 20
    // Prevents player from cheating
    else if (pos.y < 0)  pos.y = 20;
  }
}

// OK
void StartMenu() {
  fill(0);
  text("Please Hold Space", width/2, height/2 + 70);
  //  if (mouseX > 410 && mouseX < 630 && mouseY > 285 && mouseY < 250) {
  if ( keyPressed ) {
    if ( key == 32 );
    facts = true;
    Trans();
  } else if ( facts = facts ) {
    background(255);
  }
  println("yes!");
}
// GOOD
void Aim() {
  image(Aim, mouseX, mouseY);
  Aim.resize(10, 10);
  println("The x cord is  " + mouseX, "The y cord is  " + mouseY);
}
// GOOD
void Trans() {
  rectMode(CORNER);
  noStroke();
  fill(0);
  rect(0, 0, trans1, 1000);
  rect(0, 200, trans2, 1000);
  //fill(255,0, 0);
  fill(0);

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
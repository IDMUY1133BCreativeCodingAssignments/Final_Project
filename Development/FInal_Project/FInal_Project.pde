// IMPORTS

import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

// Final Project by Jonatan Wu                                                                
// Vertical Shooter Replica    
/*
// PROGRESS
 - Added Images
 - Added TextFont
 - Added StartMenu
 - Added Transitions
 - 
 
 TO DO
 - Fix Application size and Map the BNG
 - Fix Controls to Diagonally
 - Add Sound / SFX
 - Fix Transitions
 - Add Blast Effect + Particle System
 - Add Vector System
 - Add Clickable Options
 */

// --------------------------------------------------------------------------VARIABLES------------------------------------------------------------------------//

// BACKGROUND                                                                           
PImage bng;     
// TRANSITIONS
color c = color(255);
float limit = 1;
float limit2 = 255;
// MOTION VARS  
int x = 400/2;
int y = 400/2;
// SHIP VAR
PImage Ship_1;
// BOSS VARS
PImage Boss_1;
int b_x1 = 400/2;
int b_y1 = 400/2;
// TARGET VARS
PImage Aim;
// FONTS
PFont font1;
// MISC
PImage Blast1;

// SOUNDS VARS
Minim minim;
AudioPlayer sound1;
//--------------------------------------------------------------------------MAIN-----------------------------------------------------------------------------//

void setup() {
  size(500, 500);

  // IMAGES

  Ship_1 = loadImage("Ship_1.png");
  Boss_1 = loadImage("Boss_1.png");
  Aim = loadImage("Aim.png");
  bng = loadImage("Map_1.jpg");
  font1 = createFont("Minecraft.ttf", 32);
  Blast1 = loadImage("Blast_1.png");

  // SOUNDS
  
  minim = new Minim(this);
  sound1 = minim.loadFile("Thunderforce.mp3");
}

void draw() {
  imageMode(CENTER);
  Bng();  
  Blast();
  Ship_Movement();
  StartMenu();
  Boss_1();
  Aim();
}

void StartMenu() {
  textAlign(CENTER, CENTER); // CENTERS TEXT
  textFont(font1);           // LOAD MINECRAFT TEXT FONT
  fill(0);                 // WHITE FONT FILL
  text("Start Game", 500/2, 500/2 + 50);
  fill(0);
  text("Options", 500/2, 500/2 + 100);
}

void Ship_Movement() {

  if ( keyPressed ) {
    if ( key == 'a') {
      x = x - 10;
      println(x);
    }
    if ( key == 'd') {
      x = x + 10;
    }
    if ( key == 's') {
      y = y + 10;
    }
    if ( key == 'w') {
      y = y - 10;
    }
  } // keyPressed
  image(Ship_1, x, y);
  Ship_1.resize(50, 50);
} // Ship Movement

void Boss_1() { 
  image(Boss_1, b_x1 + x, b_y1 + x );
  Boss_1.resize(300, 300);
  float x;
  x = random(1, 70);
}

void Aim() {
  image(Aim, mouseX, mouseY);
  Aim.resize(10, 10);
}

void Bng() {
  background(bng);
}


void Blast() {
  imageMode(CENTER);
  if ( mousePressed ) {
    image(Blast1, mouseX, mouseY);
    image(Blast1, mouseX, mouseY - 60);
    Blast1.resize(100, 100);
    sound1.play();
  }
}

void Weapons() {
  // CREATE AN ARRAY SO THAT IF E or Q is pressed switch blast effects
}






// NEED TO FIX AND IMPLEMENT!!!!!----------------------------------------------------------------------------------------------------------------------------
void Trans() {
  /*
  if ( limit > 0 ) { 
   limit = limit + 1 ;
   background(limit);
   }
   */

  if ( limit <= 255 ) {
    limit2 = limit2 - 1;
    background(limit2);
  }
}
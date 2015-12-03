import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;
import processing.sound.*;

PImage ship;
PImage boss1;
// SOUND
AudioPlayer sound1;
Minim minim;

int x;
int y;

void setup() {
  size(800, 600);
  ship = loadImage("Ship1.png");
  minim = new Minim(this);
  sound1 = minim.loadFile("Thunderforce.mp3", 2048);
  sound1.loop();
  boss1 = loadImage("Boss_2.png");
}


void draw() {
  background(255);
  //image(ship, mouseX-10, mouseY-50);
  
  boss1.resize(200, 200);
  image(boss1, 400, 100);
  
  
  ship.resize(100, 100);
  image(ship, width/2, height/2);
  
  
}
import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

Minim minim;
AudioPlayer findyou;
AudioPlayer ks;
PFont f; //https://processing.org/tutorials/text/
PImage fybg;
PImage bg1;
//int points;
int count=0;
PImage sax;
//float songbeats=0;
//float songtime;
BeatDetect beat;
BeatDetect beat2;
BeatListener bl;
BeatListener bl2;
//int ballspeed=128;
//float songtime=0;
//float tempo=60/128;

void setup() {
  size(1024, 768);

  f=createFont("Arial", 16, true);
  minim=new Minim(this);
  findyou=minim.loadFile("find you.mp3");
  ks=minim.loadFile("ks.mp3");
  bg1=loadImage("bg1.jpg");
  fybg=loadImage("bg2.jpg");
  sax=loadImage("sax.jpg");
  beat=new BeatDetect(findyou.bufferSize(), findyou.sampleRate());
  beat2=new BeatDetect(ks.bufferSize(),ks.sampleRate());
  beat.setSensitivity(300);
  beat2.setSensitivity(300);
  bl=new BeatListener(beat, findyou);
  bl2=new BeatListener(beat2,ks);
}

void draw() {
  noStroke();
  //song1();
  if (count==0) {
    select();
  }
  if (count==1) {
    song1();
  }
  if (count==2) {
    song2();
  }
}

void select() {
  int selectionY;
  background(fybg);
  fill(199, 120, 255);
  selectionY=height/2;

  textFont(f, 16);
  fill(255);
  textMode(CENTER);
  textSize(50);
  text("Song Select", 10, 50);

  textSize(16);
  fill(199, 120, 255);
  rect(width-200, height/2-150, 400, 100);
  fill(0);
  text("Zedd - Find You", width-150, height/2-100);

  fill(255, 0, 150);
  rect(-200, height/2-150, 400, 100);
  fill(0);
  text("Jazzy!", 50, height/2-100);

  fill(109, 162, 255);
  rect(width-200, height/2+150, 400, 100);
  fill(0);
  text("More Coming Soon~!", width-175, height/2+200);

  if (mouseX>width/2) {
    if (mousePressed) {
      count=1;
    }
  }
  if (mouseX<width/2) {
    if (mousePressed) {
      count=2;
    }
  }
}

void song1() {
  findyou.play();
  frameRate(60);
  background(bg1);
  /*if (keyPressed) {
   if (key==32) {
   findyou.pause();
   }
   }*/

  /*fill(0);
  rectMode(CENTER);
  rect(width/2, height/2, width, 500);*/

  float rectW = width / beat.detectSize();
  for (int i = 0; i < beat.detectSize(); ++i)
  {
    if ( beat.isOnset(i) )
    {
      fill(104, 159, 255);
      ellipse( i*rectW, height/2, 100, 100);
    }
  }
  int lowBand = 5;
  int highBand = 15;
  int numberOfOnsetsThreshold = 4;
  if ( beat.isRange(lowBand, highBand, numberOfOnsetsThreshold) )
  {
    fill(255, 98, 88);
    ellipse(rectW*lowBand, height/2, (highBand-lowBand)*rectW, 400);
  }

  if (findyou.isPlaying()==false) {
    count=0;
  }
}

void song2() {
  background(sax);
  ks.play();
  frameRate(60);

  /*fill(0);
  rectMode(CENTER);
  rect(width/2, height/2, width, 500);*/

  float rectW = width / beat2.detectSize();
  for (int i = 0; i < beat2.detectSize(); ++i)
  {
    if ( beat2.isOnset(i) )
    {
      fill(0, 159, 255);
      rect( i*rectW, height/2, rectW, 100);
      //ellipse(i+rectW, ballY, 10, 10);
    }
  }
  int lowBand = 5;
  int highBand = 15;
  int numberOfOnsetsThreshold = 4;
  if ( beat.isRange(lowBand, highBand, numberOfOnsetsThreshold) )
  {
    fill(0, 255, 88);
    rect(rectW*lowBand, height/2, (highBand-lowBand)*rectW, 400);
  }

  if (ks.isPlaying()==false) {
    count=0;
  }
}
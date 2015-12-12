import ddf.minim.*;
import ddf.minim.analysis.*;

// variables for utility
Minim minim; // start Minim library
AudioPlayer player; // player is an AudioPlayer
FFT fft; // FFT stands for Fast Fourier Transform - audio to visual analysis


// variables for graphics
// vars for kickbox
int topLx, topLy, topCx, topCy, topRx, topRy; // values for kickbox top row
int midLx, midLy, midCx, midCy, midRx, midRy; // values for kickbox mid row
int botLx, botLy, botCx, botCy, botRx, botRy; // values for kickbox bot row

//vars for squarebloom
float xoffset = 0.0;
float yrise = 0.0;
int col;
color[] colorarray;

//vars for squarefield
int driftX;
float randomRotateAmt;

// variables for monitoring
int bassAmp, kickboxSensitivity;


void setup() {
  // create window in 720p and with Z-axis
  size(1280, 720, P3D);
  frameRate(60);
  background(0);


  // allow loading files in data directory
  minim = new Minim(this);

  // load the audio track in data directory
  player = minim.loadFile("drowning.mp3", 1024);

  // FFT object with time domain buffer
  fft = new FFT(player.bufferSize(), player.sampleRate());

  // setup for kickbox
  kickboxSensitivity = 150;
  println("Kickbox Sensitivity is " + kickboxSensitivity);

  // setup for squarebloom
  colorarray = new color[6];
  colorarray[0] = color(39, 255, 97);
  colorarray[1] = color(70, 255, 251);
  colorarray[2] = color(226, 255, 92);
  colorarray[3] = color(255, 122, 93);
  colorarray[4] = color(252, 104, 255);
  colorarray[5] = color(255, 174, 62);

  //setup for squarefield
  driftX = 0;
  randomRotateAmt = random(1, 24);
  stroke(255);
}

// ****----//// DRAW \\\\----****

void draw() {

  fft.forward(player.mix); // initiate FFT on player
  bassAmp = int(fft.getFreq(50)); // analyse amplitude of 50Hz

  // --function-- kickbox(margin, randomness amount, color scheme "warm" or "cool", thickness)
  //kickbox(50, bassAmp, "warm", 20);

  // --function-- squarebloom(basesize of square)
  //squarebloom(6);

  // --function-- squarefield(rectangle width, rectangle height, colorOFF=0/colorON=1)
  squarefield(20, 20, 0);
}

// ****----//// END DRAW \\\\----****

// ****----//// KEYPRESS EVENTS \\\\----****

void keyPressed() {

  // for player, spacebar is start song
  if (key == ' ') {
    if (player.isPlaying()) {
      player.pause();
    } else if (player.position() == player.length()) {
      player.rewind();
      player.play();
    } else {
      player.play();
    }
  }

  // for kickbox sensitivity, up is +10, left is -10, used in kickbox() function
  if (key == CODED) {
    if (keyCode == UP) {
      kickboxSensitivity = kickboxSensitivity + 10;
      println("Sensitivity is " + kickboxSensitivity);
    }
  }
  if (key == CODED) {
    if (keyCode == DOWN) {
      kickboxSensitivity = kickboxSensitivity - 10;
      println("Sensitivity is " + kickboxSensitivity);
    }
  }
}

// ****----//// END KEYPRESS EVENTS \\\\----****



// ****----//// GRAPHICS \\\\----****

// kickbox (graphic on beat)
void kickbox(int margin, int kickjerk, String colorMode, int thickness) {

  background(0);

  // top row
  topLx = margin+int(random(-kickjerk, kickjerk));
  topLy = margin+int(random(-kickjerk, kickjerk));
  topCx = width/2+int(random(-kickjerk, kickjerk));
  topCy = margin+int(random(-kickjerk, kickjerk));
  topRx = width-margin+int(random(-kickjerk, kickjerk));
  topRy = margin+int(random(-kickjerk, kickjerk));

  // mid row
  midLx = margin+int(random(-kickjerk, kickjerk));
  midLy = height/2+int(random(-kickjerk, kickjerk));
  midCx = width/2+int(random(-kickjerk, kickjerk));
  midCy = height/2+int(random(-kickjerk, kickjerk));
  midRx = width-margin+int(random(-kickjerk, kickjerk));
  midRy = height/2+int(random(-kickjerk, kickjerk));

  // bot row
  botLx = margin+int(random(-kickjerk, kickjerk));
  botLy = height-margin+int(random(-kickjerk, kickjerk));
  botCx = width/2+int(random(-kickjerk, kickjerk));
  botCy = height-margin+int(random(-kickjerk, kickjerk));
  botRx = width-margin+int(random(-kickjerk, kickjerk));
  botRy = height-margin+int(random(-kickjerk, kickjerk));

  // stroking
  if (colorMode == "cool") {
    if (bassAmp>kickboxSensitivity) {
      stroke(0, random(200, 255), random(150, 255), 230);
    } else { 
      noStroke();
    }
  }
  if (colorMode == "warm") {
    if (bassAmp>kickboxSensitivity) {
      stroke(random(180, 255), random(50, 75), random(30, 60), 230);
    } else { 
      noStroke();
    }
  }
  strokeWeight(random(thickness, thickness+10));

  // horizontal lines
  line(topLx, topLy, topCx, topCy);
  line(topCx, topCy, topRx, topRy);
  line(midLx, midLy, midCx, midCy);
  line(midCx, midCy, midRx, midRy);
  line(botLx, botLy, botCx, botCy);
  line(botCx, botCy, botRx, botRy);

  // vertical lines
  line(topLx, topLy, midLx, midLy);
  line(topCx, topCy, midCx, midCy);
  line(topRx, topRy, midRx, midRy);
  line(midLx, midLy, botLx, botLy);
  line(midCx, midCy, botCx, botCy);
  line(midRx, midRy, botRx, botRy);
}

// squarebloom (scene 2)
void squarebloom(int basesize) {
  xoffset = xoffset + .01;
  yrise = yrise - 1;
  if (yrise<-(height+15)) {
    yrise=0;
    noStroke();
    fill(0, 0, 0, 200);
    rect(0, 0, width, height);
  }
  float n = noise(xoffset) * bassAmp*2;
  println(n);
  strokeWeight(1);
  col = color(colorarray[(int)random(0, 5)]);
  noFill();
  stroke(col);
  rect(width/2+5+n, height+15+yrise, basesize+bassAmp/10, basesize+bassAmp/10);
  stroke(col);
  rect(width/2-5-n, 0-15-yrise, basesize+bassAmp/10, basesize+bassAmp/10);
}

// squarefield (scene 3)
void squarefield(int rectWidth, int rectHeight, int colorON) {
  background(0);
  pushMatrix();
  driftX = driftX - 5;
  if (driftX<-width*3) {
    driftX = 0;
  }
  if (bassAmp>kickboxSensitivity) {
    randomRotateAmt = random(1, 24);
    if (colorON==1) {
      stroke(random(125, 255), random(125, 255), random(125, 255));
    }
    if (colorON==0) {
      stroke(255);
    }
  }
  translate(driftX, 0);
  for (int iX = 20; iX<width*12; iX=iX+40) {
    for (int iY = 20; iY<height; iY=iY+40) {
      noFill();
      rotateY(randomRotateAmt);
      rect(iX, iY, rectWidth, rectHeight);
    }
  }
  popMatrix();
}

// ****----//// END GRAPHICS \\\\----****
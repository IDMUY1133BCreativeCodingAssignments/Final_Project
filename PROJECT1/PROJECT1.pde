//REFERENCE: processing.org


Eye eye1, eye2;
float e;
PImage[] spiders = new PImage[1000];

PImage spider;

int getRandomX() {
  return int(random(1000));
}

//not sure why there is an error here
//trying to get an array of random numbers from 0-1000 to represent the x-coordinates of new spiders
/*
int[] spiderX = {
 for(int i = 0; i<1000; i++){
 getRandomX();
 }
 };
 */
//y coordinate is always 0 because all spiders start at the top
float spiderY = 0;

final int stateWelcomeScreenDisplay=0;
final int playGame=1;
int stateOfProgram = stateWelcomeScreenDisplay;



void setup() {

  size(1000, 800);
  smooth();
  noStroke();


  eye1 = new Eye(width/2-290, height/2-210, 70);
  eye2 = new Eye(width/2-190, height/2-210, 70);

  spider =  loadImage("spider.png");

  /*
    for( int i=0; i< spiders.length; i++) {
   spiders[i] = spider =  loadImage("spider.png");
   image(spider, random(0,1000), 0, spider.width/2, spider.height/2);
   translate(
   }
   
   */
}

void draw() {

  background(0);


  switch(stateOfProgram) {
  case stateWelcomeScreenDisplay:
    doStateWelcomeScreenDisplay();
    break;
  case playGame:                      
    play();
    break;
  }

  if (mousePressed == true) {
    play();
  }

  //e = map(mouseX, 0, 700, 100, -100);

  //spider as mouse
  //image(spider, mouseX-50, mouseY-50, spider.width/2, spider.height/2);

  //translate(e, 0);
  //translate(0, e);

  /*
  if (mouseX<350 && mouseY<350) {
   translate(175, 175);
   } else if (mouseX<350 && mouseY>350) {
   translate(175, -175);
   } else if (mouseX>350 && mouseY<350) {
   translate(-175, 175);
   } else if (mouseX>350 && mouseY>350) {
   translate(-175, -175);
   } 
   
   if (mousePressed) {
   translate(random(-300, 300), random(-300, 300));
   }
   
   */
}

void doStateWelcomeScreenDisplay() {
  //animation of spider bobbing up and down, connected to web:
  background(0);
  stroke(255, 255, 255);
  line(500, 0, 500, 600);
  translate(0, random(-50, 50)); //how do I slow down this animation?
  image(spider, 250, 370, width/2, height/2);
  translate(0, 0);
  textSize(50);
  text("CLICK TO PLAY", 340, 200);   //how do I make it so text won't translate with spider?
  fill(255, 255, 255);
}

void spiderMove() {
  for (int i=0; i<1; i++) {
    image(spider, random(1000), 0, spider.width/2, spider.height/2);
    spiderY+=random(5);
  }

  //each spider moves down 50 pixels at a time until it reaches the bottom of screen
  for (spiderY=0.0; spiderY<1000; spiderY+=50) {
    translate(0, spiderY);
  }
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == LEFT) {
      translate(-50, 0);
    } else if (keyCode == RIGHT) {
      translate(50, 0);
    } else {
      translate(0, 0);
    }
  }
}


void play() {
  background(0);
  //head moves horizontally at bottom of screen 
  //head is controlled by left and right arrows

  keyPressed();

  //how do I scale body()??
  //head gets bigger with every bite/interaction with spider
  //As game progresses, more spiders appear frequently
  //After 8 attacks, the game is over; use count 
  //background sound
  //biting sound when spider touches head
  //scream sound when bitten
  //inflating sound when head expands
  //pop sound after eighth bite 
  //head explode animation


  body();


  eye1.update(mouseX, mouseY);
  eye2.update(mouseX, mouseY);

  eye1.display();
  eye2.display();
}


void body() {
  translate(random(-8, 8), 0);
  translate(0, 430);
  //fill(250, 0, 60);
  //ellipse(width/2, height/2, 200, 200);
  noStroke();
  fill(82, 68, 48);
  ellipse(390, 180, 100, 150);
  ellipse(280, 120, 250, 180);
  fill(242, 201, 178);
  ellipse(270, 250, 260, 250);
  ellipse(280, 160, 255, 140);
  fill(82, 68, 48);
  ellipse(168, 180, 100, 150);
  fill(242, 201, 178);
  ellipse(208, 180, 100, 150);
  ellipse(160, 225, 70, 80);
  ellipse(380, 225, 70, 80);
  stroke(0);
  ellipse(240, 280, 45, 40);
  ellipse(280, 280, 45, 40);
  ellipse(260, 290, 45, 39);
  noStroke();
  rect(220, 259, 80, 19);
  rect(235, 277.5, 49, 21);
  fill(82, 68, 48);
  ellipse(210, 160, 50, 40);
  ellipse(310, 160, 50, 40);
  fill(242, 201, 178);
  ellipse(210, 167, 60, 40);
  ellipse(310, 167, 60, 40);
  stroke(0);
  fill(0);
  ellipse(210, 190, 35, 40);
  ellipse(310, 190, 35, 40);
  fill(242, 201, 178);
  ellipse(210, 185, 35, 40);
  ellipse(310, 185, 35, 40);
  line(260, 185, 260, 260);
  noStroke();
  fill(240, 181, 160);
  //mouth
  fill(255);
  stroke(0);
  rect(220, 320, 85, 30);
  //teeth
  line(220, 335, 305, 335);
  line(237, 320, 237, 350);
  line(254, 320, 254, 350);
  line(271, 320, 271, 350);
  line(288, 320, 288, 350);
  line(305, 320, 305, 350);
}

class Eye {

  int eyeX, eyeY;
  int size;
  float angle = 0.0;

  Eye(int x, int y, int s) {
    eyeX = x;
    eyeY = y;
    size = s;
  }

  void update(int mx, int my) {

    angle = atan2(my-eyeY, mx-eyeX);
  }

  void display() {
    pushMatrix();
    translate(eyeX, eyeY);
    fill(255);
    ellipse(0, 0, size, size);
    rotate(angle);
    fill(153);
    ellipse(size/4, 0, size/3, size/3);
    popMatrix();
  }
}

void lose() {  //this will play when player loses
  background(0);
  textSize(60);
  text("YOU LOSE!", 340, 300);   
  fill(255, 255, 255);
  textSize(45);
  text("Click to Start Over", 340, 400);   
  fill(255, 255, 255);

  if (mousePressed == true) {          
    doStateWelcomeScreenDisplay();    //or call play()
  }
}

void win() {  //this will appear when player wins
  background(0);
  textSize(65);
  text("YOU WIN!", 340, 300);   
  fill(255, 255, 255);
  textSize(45);
  text("Click to Play Again", 340, 400);   
  fill(255, 255, 255);

  if ( mousePressed == true) {
    doStateWelcomeScreenDisplay();    //or call play()
  }
}
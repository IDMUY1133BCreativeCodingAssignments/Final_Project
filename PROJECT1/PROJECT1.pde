//REFERENCE: processing.org
//ideas
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
//head moves horizontally at bottom of screen 
//head is controlled by left and right arrows


Eye eye1, eye2;
float e;
int count=0;
int xx, yy;
float x, y;
int human1x, human1y, human2x, human2y, human3x, human3y, human4x, human4y, human5x, human5y;
int lives = 8;
int imgX, imgY;
int bodyX, bodyY;
float spiderRandomX ;
float spiderRandomY ;
float size ;
PImage[] spiders = new PImage[1];

int[] spiderX = new int[1000];
float scale = 0.5;
PImage spider;

//not sure why there is an error here
//trying to get an array of random numbers from 0-1000 to represent the x-coordinates of new spiders

//int[] spiderX = {9, 0, 0};
/*
for (int i = 0; i< spiderX.size()-1; i++) {  //.length() -1 ??
 //getRandomX();
 spiderX[i] = int(random(0, width));
 }
 
 
 };
 */
//y coordinate is always 0 because all spiders start at the top
float spiderY = 0;

void setup() {

  size(1000, 800);
  smooth();
  noStroke();

  spider =  loadImage("spider.png");
}

void draw() {

  background(0);

  for (int i=0; i<1000000; i++) {
    spiderRandomX = random(-100, 800);
    spiderRandomY = random(100, 800);
    size = random(6-10);
  }

  play();

  if (count == 0) {
    doStateWelcomeScreenDisplay();
  } else if (count == 1) {
    play();
  } else if (count == 2) {
    doStateWelcomeScreenDisplay();
  } else if (count == 3) {
    draw();
  }
}


void doStateWelcomeScreenDisplay() {
  //animation of spider bobbing up and down, connected to web:
  background(0);
  stroke(255, 255, 255);
  line(500, 0, 500, 600);
  pushMatrix();
  imageMode(CENTER);
  translate(0, random(-50, 50)); //how do I slow down this animation?
  image(spider, width/2, height/2 +200, width/2, height/2);
  popMatrix();
  fill(255, 255, 255);
  rect(300, 150, 400, 65);
  textSize(50);
  fill(0, 0, 0);
  text("Click to Play", 340, 200);   //how do I make it so text won't translate with spider?


  if (mousePressed) {
    count++;
  }
}

void spiderMove() {

  imageMode(CENTER);
  pushMatrix();
  frameRate(4);
  for (int i=0; i<1; i++) {
    image(spider, spiderRandomX, spiderRandomY, spider.width/size, spider.height/size);
  }
  popMatrix();
  //each spider moves down 50 pixels at a time until it reaches the bottom of screen
}

void keyPressed() {

  pushMatrix();
  frameRate(40);
  if (key == CODED) {
    if (keyCode == LEFT) {
      xx-=50;
      get();
    } else if (keyCode == RIGHT) {
      xx+=50;
      spider.get();
    } else if (keyCode == UP) {
      yy-=50;
      get();
    } else if (keyCode == DOWN) {
      yy+=50;
      get();
    }
  } else {
    x=0;
    y=0;
  }
  popMatrix();
}


void play() {
  int m = millis();
  background(0);

  keyPressed();

  body();

  spiderMove();



  if ( human5x>1200 || human5x<-200 || human5y<-200 || human5y>1000 ) {
    lose();
  }


  if (lives >= 1  && m == 60000) {   //change amount of time to 120000
    win();
  }

  loseLives();
}

void loseLives() {
  float difference1x = spiderRandomX - human1x;
  float difference1y = spiderRandomY - human1y;
  float difference2x = spiderRandomX - human2x;
  float difference2y = spiderRandomY - human2y;
  float difference3x = spiderRandomX - human3x;
  float difference3y = spiderRandomY - human3y;
  float difference4x = spiderRandomX - human3x;
  float difference4y = spiderRandomY - human4y;
  float difference5x = spiderRandomX - human5x;
  float difference5y = spiderRandomY - human5y;


  if (difference5x >= 4 && difference5y >= 4) {
    lives = 8;
    textSize(40);
    text("lives:" + lives, 800, 50);   
    fill(255, 255, 255);
  
  } else if (difference5x <=3 && difference5y <=3 && lives<8) {
    lives-=1;
    textSize(40);
    text("lives:" + lives, 800, 50);   
    fill(255, 255, 255);
  }
/*
  for (lives=8; lives>0; lives--) {
    if (difference5x >= 4 && difference5y >= 4) {
      lives = 8;
      textSize(40);
      text("lives:" + lives, 800, 50);   
      fill(255, 255, 255);
    } else if (difference5x <=3 && difference5y <=3 && lives<8) {
      lives-=1;
      textSize(40);
      text("lives:" + lives, 800, 50);   
      fill(255, 255, 255);
    } else   if (lives <= 0) {
      break;
      lose();
      break;
    }
  }
  */

  if (lives <= 0) {
    lose();
  }
}

void body() {
  pushMatrix();
  scale(scale);
  translate(random(-8, 8), 0);
  translate(200, 200);
  //fill(250, 0, 60);
  //ellipse(width/2, height/2, 200, 200);
  noStroke();
  fill(82, 68, 48);
  ellipse(390+xx, 180+yy, 100, 150);
  ellipse(280+xx, 120+yy, 250, 180);
  fill(242, 201, 178);
  ellipse(270+xx, 250+yy, 260, 250);
  ellipse(280+xx, 160+yy, 255, 140);
  fill(82, 68, 48);
  ellipse(168+xx, 180+yy, 100, 150);
  fill(242, 201, 178);
  ellipse(208+xx, 180+yy, 100, 150);
  ellipse(160+xx, 225+yy, 70, 80);
  ellipse(380+xx, 225+yy, 70, 80);
  stroke(0);
  ellipse(240+xx, 280+yy, 45, 40);
  ellipse(280+xx, 280+yy, 45, 40);
  ellipse(260+xx, 290+yy, 45, 39);
  noStroke();
  rect(220+xx, 259+yy, 80, 19);
  rect(235+xx, 277.5+yy, 49, 21);
  fill(82, 68, 48);
  ellipse(210+xx, 160+yy, 50, 40);
  ellipse(310+xx, 160+yy, 50, 40);
  fill(242, 201, 178);
  ellipse(210+xx, 167+yy, 60, 40);
  ellipse(310+xx, 167+yy, 60, 40);
  stroke(0);
  fill(0);
  ellipse(210+xx, 190+yy, 35, 40);
  ellipse(310+xx, 190+yy, 35, 40);
  fill(255);
  ellipse(210+xx, 185+yy, 35, 40);
  ellipse(310+xx, 185+yy, 35, 40);
  line(260+xx, 185+yy, 260+xx, 260+yy);
  noStroke();
  fill(240, 181, 160);
  //mouth
  fill(255);
  stroke(0);
  rect(220+xx, 320+yy, 85, 30);
  //teeth
  line(220+xx, 335+yy, 305+xx, 335+yy);
  line(237+xx, 320+yy, 237+xx, 350+yy);
  line(254+xx, 320+yy, 254+xx, 350+yy);
  line(271+xx, 320+yy, 271+xx, 350+yy);
  line(288+xx, 320+yy, 288+xx, 350+yy);
  line(305+xx, 320+yy, 305+xx, 350+yy);
  //eye
  fill(153);
  ellipse(210+xx, 185+yy, 20, 20);
  ellipse(310+xx, 185+yy, 20, 20);

  /*
  eye1 = new Eye(width/2-290+xx, height/2-210+yy, 70);    //Eye class not working
   eye2 = new Eye(width/2-190+xx, height/2-210+yy, 70);
   
   eye1.update(spiderRandomX, spiderRandomY);
   eye2.update(spiderRandomX, spiderRandomY);
   eye1.display();
   eye2.display();
   */


  human1x = 140 + xx;
  human1y = 310 + yy;
  human2x = 380 + xx;
  human2y = 310 + yy;
  human3x = 140 + xx;
  human3y = 140 + yy;
  human4x = 380 + xx;
  human4y = 140 + yy;
  human5x = 500 + xx;
  human5y = 400 + yy;

  popMatrix();
}


class Eye {   //not working with scale

  int eyeX, eyeY;
  int size1;
  float angle = 0.0;

  Eye(int x1, int y1, int s1) {

    eyeX = x1 ;
    eyeY = y1 ;
    size1 = s1;
  }

  void update(float mx, float my) {

    angle = atan2(my-eyeY, mx-eyeX);
  }

  void display() {

    translate(eyeX, eyeY);
    fill(255);
    ellipse(xx, yy, size1, size1);
    rotate(angle);
    fill(153);
    ellipse(size1/4+xx, yy, size1/3, size1/3);
  }
}

void lose() {  //this will play when player loses
  background(0);
  textSize(60);
  text("YOU LOSE!", 340, 300);
}

void win() {  //this will appear when player wins
  background(0);
  textSize(65);
  text("YOU WIN!", 340, 300);
}
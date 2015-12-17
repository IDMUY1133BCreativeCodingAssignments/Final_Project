//REFERENCE: processing.org


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
PImage[] spiders = new PImage[1];

int[] spiderX = new int[1000];

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
}

void draw() {

  background(0);
  
  for(int i=0; i<1000; i++){
    spiderRandomX = random(-100, 1000);
    spiderRandomY = random(0, 800);
  }

  if (count == 0) {
    doStateWelcomeScreenDisplay();
  } else if (count == 1) {
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
  pushMatrix();
  translate(0, random(-50, 50)); //how do I slow down this animation?
  image(spider, 250, 370, width/2, height/2);
  popMatrix();
  textSize(50);
  text("CLICK TO PLAY", 340, 200);   //how do I make it so text won't translate with spider?
  fill(255, 255, 255);

  if (mousePressed) {
    count++;
  }
}

void spiderMove() {
  float size = random(7-10);
  imageMode(CENTER);
  pushMatrix();
  frameRate(4);
  for (int i=0; i<1; i++) {
    image(spider, spiderRandomX, spiderRandomY, spider.width/size, spider.height/size);
    
  }
  popMatrix();
  //each spider moves down 50 pixels at a time until it reaches the bottom of screen
  for (spiderY=0.0; spiderY<1000; spiderY+=50) {
    translate(0, spiderY);
  }
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


  eye1.display();
  eye2.display();

  spiderMove();
  
  loseLives();
  

}

void loseLives() {
  textSize(40);
  text("lives:" + lives, 900, 50);   
  fill(255, 255, 255);
  if (spiderRandomX == human1x && spiderRandomY == human1y) {
    lives-=1;
    textSize(40);
    text("lives:" + lives, 900, 50);   
    fill(255, 255, 255);
  } else if (spiderRandomX == human2x && spiderRandomY == human2y) {
    lives-=1;
    textSize(40);
    text("lives:" + lives, 900, 50);   
    fill(255, 255, 255);
  } else if (spiderRandomX == human3x && spiderRandomY == human3y) {
    lives-=1;
    textSize(40);
    text("lives:" + lives, 900, 50);   
    fill(255, 255, 255);
  } else if (spiderRandomX == human4x && spiderRandomY == human4y) {
    lives-=1;
    textSize(40);
    text("lives:" + lives, 900, 50);   
    fill(255, 255, 255);
  } else if (spiderRandomX == human5x && spiderRandomY == human5y) {
    lives-=1;
    textSize(40);
    text("lives:" + lives, 900, 50);   
    fill(255, 255, 255);
  }

  if (lives == 0) {
    lose();
  }
}

void body() {
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
  fill(242+xx, 201+yy, 178);
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
}


class Eye {

  int eyeX, eyeY;
  int size;
  float angle = 0.0;

  Eye(int x1, int y1, int s1) {
    eyeX = x1;
    eyeY = y1;
    size = s1;
  }

  void update(int mx, int my) {

    angle = atan2(my-eyeY, mx-eyeX);
  }

  void display() {
    pushMatrix();
    translate(eyeX, eyeY);
    fill(255);
    ellipse(xx, yy, size, size);
    rotate(angle);
    fill(153);
    ellipse(size/4+xx, yy, size/3, size/3);
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
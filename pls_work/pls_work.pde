//int[]songs;//how can i get it to count the number of classes?
int ar;
PFont f; //https://processing.org/tutorials/text/
int findyou;

void setup() {
  background(255);
  size(1200, 600);
  noCursor();
  f=createFont("Arial", 16, true);
  findyou=new Find_You;
}

void draw() {
  axel();
}

void axel() {
  background(255);
  stroke(222, 16, 0);
  strokeWeight(2);
  line(mouseX, mouseY, width/2, height/2);
  stroke(16, 37, 255);
  line(width-mouseX, height-mouseY, width/2, height/2);
  noStroke();
  fill(129, 24, 235);
  ellipse(width/2, height/2, 50, 50);
}

void select() {
  int selectionX;
  int selectionY;
  background(255);
  /*for(int i=0;i<songs.length; i++){
   rectMode(CENTER);
   fill(199,120,255);
   rect(1000,(height/(i*2)),400,100);
   textMode(CENTER);
   fill(0);
   text(songname,1000,height/i);
   }*/  //this is if I have multiple songs
  fill(199, 120, 255);
  selectionX=1000;
  selectionY=height/2;
  rect(1000, height/2, 400, 100);
  textFont(f, 16);
  fill(0);
  text("Zedd - Find You", 10, 100);
  if ((mouseX>800)||((mouseY-selectionY)<200)){
    if(mousePressed){
      findyou.display();
      findyou.update();
      findyou.control();
    }
  }
}
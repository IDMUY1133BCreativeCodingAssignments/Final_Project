int click = 1;
void setup() {
  size(1200, 700);
  noFill();
  smooth();
}
void draw() {
if (click == 1) {
    bomb();
    maze();
    matchstick();}

  if (click == 2){
    background(random(5),random(0),random(25));
    for(int i = 0; i < 13; i++) {
      int x = (int)random(400);
      int y = (int)random(400);
        explosion((x*-1)-20,(y*-1)-50);
        explosion((x*-1)-20,y-50);
        explosion(x-20,y-50);
        explosion(x-20,(y*-1)-50);
    }//end of for
  }// end of if
  if (click == 3){ background(random(255)); }
  if (click == 4) { background(0);}
}// end of draw

void mousePressed() {
  click++;
  if (click > 4) click=1;
}
void bomb() {
  background(255);
  noStroke();
  fill(0);
  ellipse(190, 100, 75, 75);
  noFill();
  stroke(0);
  strokeWeight(10);
  curve(190, 100, 190, 62, 220, 50, 230, 35);
}
void matchstick() {
  stroke(255, 227, 188);
  strokeWeight(8);
  line(mouseX, mouseY, 30 +mouseX, 40 + mouseY);
  noStroke();
  fill(255, 72, 34);
  ellipse(mouseX, mouseY, 15, 27);}
  void maze() {
  stroke(246, 139, 0);
  strokeWeight(15);
  line(140, 30, 1050, 30);
  line(140, 640, 1170, 640);
  line(1170, 30, 1170, 640);
  line(1050, 30, 1050, 550);
  line(950, 150, 940, 640);
  line(850, 30, 840, 550);
  line(750, 150, 740, 640);
  line(650, 30, 650, 550);
  line(550, 150, 550, 640);
  line(450, 30, 450, 550);
  line(350, 150, 350, 640);
  line(140, 30, 140, 640);
  line(250, 30, 250, 550);}
 void explosion(int x, int y){
   fill(random(255),random(209),random(51));
   noStroke();
   beginShape();
   vertex(600+x,350+y);
   vertex(628+x,394+y);
   vertex(642+x,337+y);
   vertex(643+x,395+y);
   vertex(686+x,366+y);
   vertex(656+x,405+y);
   vertex(700+x,410+y);
   vertex(653+x,421+y);
   vertex(685+x,443+y);
   vertex(642+x,427+y);
   vertex(663+x,483+y);
   vertex(635+x,440+y);
   vertex(621+x,496+y);
   vertex(620+x,444+y);
   vertex(579+x,462+y);
   vertex(614+x,431+y);
   vertex(544+x,420+y);
   vertex(600+x,415+y);
   vertex(573+x,366+y);
   vertex(610+x,405+y);
   vertex(600+x,350+y);
   endShape();}
var eye1, eye2;
var e;
var cockroach;

function setup(){
  createCanvas(700,700);
  smooth();
  noStroke();

  eye1 = new Eye(width/2-140, height/2-160,70);
  eye2 = new Eye(width/2-40, height/2-160, 70);
  cockroach = loadImage("spider.png");
  bg = loadImage("spiderWeb.png");

}

function draw(){
  background(bg);
  e = map(mouseX, 0, 700, 100, -100);

  //cockroach as mouse
  image(cockroach, mouseX-50, mouseY-50, cockroach.width/4,cockroach.height/4);

  translate(random(-8,8), random(-8,8));
  translate(e,0);
  translate(0,e);

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

  body();

  eye1.update(mouseX, mouseY);
  eye2.update(mouseX, mouseY);

  eye1.display();
  eye2.display();
}

function Eye(var x, var y, var s){

  this.eyeX = x;
  this.eyeY = y;
  this.size = s;
  this.angle = 0.0;

  this.update = function(var mx, var my){
    this.angle = atan2(my-eyeY, mx-eyeX);
  }

  this.display = function(){
    push();
    translate(eyeX, eyeY);
    fill(255);
    ellipse(0, 0, size, size);
    rotate(angle);
    fill(153);
    ellipse(size/4, 0, size/3, size/3);
    pop();
  }

}










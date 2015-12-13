void setup(){
  size(800,600);
  smooth();
}

void draw(){
  background(255);
  topbox();
  bottombox();
  herohealth();
  
}

void topbox(){
  fill(0);
  strokeWeight(3);
  stroke(200);
  rect(50, 25, 700, 125);
  
  noFill();
}

void bottombox(){
  fill(0);
  strokeWeight(3);
  stroke(200);  
  rect(50, 425, 700, 150);
  noFill();
}

void herohealth(){
  fill(255, 0, 0);
  noStroke();
  rect(125, 475, 350, 40);
  
}
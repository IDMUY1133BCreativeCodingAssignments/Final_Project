void setup (){
  size(220,220);  
}

void draw() {
  background(237,221,172,125);
  
  //large cream triangle like shape
  fill(235,224,206);
  noStroke();
  beginShape();
    vertex(20,0);
    vertex(35,0);
    vertex(87,220);
    vertex(0,220);
    vertex(0,65);
  endShape(CLOSE);
 
 //yellow triangle
 fill(255,207,41,200);
 triangle(60,16,82,58,30,55); 
 
 //circles under yellow triangle
 stroke(0);
 strokeWeight(2);
 fill(195,190,163);
 ellipse(94,68,32,34);
 stroke(241,239,220);
 fill(76,102,144,180);
 ellipse(94,68,24,24);
 
// weird line thing on lop right corner
stroke(1);
strokeWeight(.5);
line(127,0,124,102);
line(132,0,128,102);

line(112,91,144,91);
line(112,89,144,90);
line(112,87,144,88);
line(112,86,144,86);
noFill();
strokeWeight(1);
arc(134,24,30,30, PI/ 3, 5* PI/ 3);




//two line in middle left side
 stroke(3);
 strokeWeight(.75);
 line(0,74,108,152);
 line(0,98,108,152);
 
 //green ellipse
 noStroke();
 fill(223,225,194,220);
 ellipse(19,143,40,36);
 
 //ellipse within green ellipse
 stroke(5);
 strokeWeight(1);
 fill(235,224,206);
 ellipse(19,143,26,26);
 
 //green triangle outline thing
 noStroke();
 fill(130,157,105,210);
 beginShape();
   vertex(0,198);
   vertex(14,182);
   vertex(73,220);
   vertex(68,220);
   vertex(15,189);
   vertex(0,206);
 endShape(CLOSE);
 
 //whole buncha black lines in bottom left corner
 stroke(1);
 strokeWeight(.5);
 line(0,200,46,182);
 line(0,204,48,184);
 line(8,220,108,172);
 
 //orangey line in bottom left corner
 stroke(205,115,89,210);
 strokeWeight(2);
 line(4,220,106,172);
 
 //black triangle outline thing
 noStroke();
 fill(63,53,49);
 beginShape();
   vertex(0,192);
   vertex(14,176);
   vertex(81,220);
   vertex(73,220);
   vertex(14,182);
   vertex(0,198);
  endShape(CLOSE);
  
 //redarc
 stroke(182,87,74);
 strokeWeight(3);
 noFill();
 ellipse(100,220,46,46);
 ellipse(128,193,30,30);
 noStroke();
 fill(237,221,172);
 triangle(100,220,140,180,139,220);
 rect(139,179,10,40);
 
 
 //two lines near red curve
 stroke(1);
 strokeWeight(1);
 line(57,220,138,157);
 line(78,220,148,160);

 // bumble bee lines
 stroke(0);
 strokeWeight(3);
 line(112,220,136,204);
 stroke(254,220,68);
 line(119,220,140,206);
 

//largest lines
 stroke(0);
 strokeWeight(1.5);
 line(0,62,20,0);
 line(34,0,86,220);

 //maroon rect
 noStroke();
 fill(210,139,151);
 rect(127,129,62,48);

 //two lines near red curve
 stroke(1);
 strokeWeight(1);
 line(57,220,138,157);
 line(78,220,148,160);
 
//circle on left side
stroke(0);
strokeWeight(2);
fill(237,162,51,140);
ellipse(202,126,64,68);
noStroke();
fill(184,214,169,210);
arc(220,128,60,60, PI/2, 3*PI/2);

 
//color for grid
fill(239,225,214,190);
beginShape();
  vertex(172,220);
  vertex(197,202);
  vertex(189,186);
  vertex(206,178);
  vertex(198,162);
  vertex(220,152);
  vertex(220,220);
  vertex(172,220);
 endShape(CLOSE);
 beginShape();
   vertex(174,191);
   vertex(188,185);
   vertex(180,171);
   vertex(168,177);
  endShape(CLOSE);
fill(147,144,125,218);
beginShape();
  vertex(167,176);
  vertex(180,169);
  vertex(172,156);
  vertex(159,162);
  vertex(167,176);
 endShape(CLOSE);
fill(205,55,79,170);
  beginShape();
    vertex(170,177);
    vertex(181,170);
    vertex(173,155);
    vertex(192,148);
    vertex(191,177);
    vertex(170,177);
   endShape(CLOSE);
fill(46,39,45);
  beginShape();
    vertex(184,213);
    vertex(175,191);
    vertex(188,186);
    vertex(184,178);
    vertex(188,176);
    vertex(188,167);
    vertex(197,163);
    vertex(206,177);
    vertex(190,187);
    vertex(197,204);
    vertex(184,213);
   endShape(CLOSE);
fill(192,41,26,215);
beginShape();
  vertex(159,161);
  vertex(150,143);
  vertex(165,137);
  vertex(173,155);
  vertex(159,161);
 endShape(CLOSE);
fill(114,139,119,218);
beginShape();
  vertex(220,133);
  vertex(212,116);
  vertex(220,112);
  vertex(220,133);
 endShape(CLOSE);
fill(168,175,109);
beginShape();
  vertex(210,155);
  vertex(204,141);
  vertex(220,135);
  vertex(220,150);
  vertex(210,155);
 endShape(CLOSE);
fill(42,15,18,215);
beginShape();
  vertex(190,147);
  vertex(180,152);
  vertex(176,146);
  vertex(173,141);
  vertex(170,134);
  vertex(182,129);
  vertex(190,147);
endShape(CLOSE);
fill(190,29,54,218);
 triangle(189,144,182,128,189,128);
 
//grid thing in bottom left corner
stroke(1);
strokeWeight(1);
line(150,142,188,220);
line(150,142,220,111);
line(165,136,205,220);
line(159,162,220,132);
line(181,130,220,205);
line(167,177,220,151);
line(194,124,220,174);
line(175,192,220,171);
line(211,116,220,133);
line(170,220,220,189);

 
  
}
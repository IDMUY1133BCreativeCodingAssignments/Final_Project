import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

//int[]songs;//how can i get it to count the number of classes?
  
//import processing.sound.*;
Minim minim;
AudioPlayer findyou;
float songbeats[];
PFont f; //https://processing.org/tutorials/text/
PImage fybg;
int[]circleX;
int[]circleY;

void setup() {
  background(255);
  size(1200, 600);
  noCursor();
  f=createFont("Arial", 16, true);
  findyou=minim.loadFile("find you.mp3");
  fybg=loadImage("bg.png");
}

void draw() {
  axel();
  song1();
  //circles();
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

/*void select() {
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
  /*fill(199, 120, 255);
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
}*/

void song1(){
  int frameCounter=0;
  int cs=4;
  int ar=7;
  background(fybg);
  findyou.play();
  frameRate(60);
  //float songbeats[];

  frameCounter+=60;
  int songtime=frameCounter/60;
  //println(songtime);
  songbeats[0]=8.733;
  songbeats[1]=9.202;
  songbeats[3]=9.671;
  songbeats[4]=10.139;
  songbeats[5]=10.374;
  songbeats[6]=10.608;
  songbeats[7]=11.077;
  songbeats[8]=11.546;
  songbeats[9]=12.014;
  songbeats[10]=12.249;
  songbeats[11]=12.483;
  songbeats[12]=12.717;
  songbeats[13]=12.952;
  songbeats[14]=13.186;
  songbeats[15]=13.421;
  songbeats[16]=13.889;
  songbeats[17]=14.124;
  songbeats[18]=14.358;
  songbeats[19]=14.827;
  songbeats[20]=15.061;
  songbeats[21]=15.296;
  songbeats[22]=15.530;
  songbeats[23]=15.764;
  songbeats[24]=15.999;
  songbeats[25]=16.467;
  songbeats[26]=16.702;
  songbeats[27]=16.936;
  songbeats[28]=17.171;
  songbeats[29]=17.405;
  songbeats[30]=17.874;
  songbeats[31]=18.108;
  songbeats[32]=18.342;
  songbeats[33]=18.811;
  songbeats[34]=19.046;
  songbeats[35]=19.280;
  songbeats[36]=19.514;
  songbeats[37]=19.983;
  songbeats[38]=20.217;
  songbeats[39]=20.452;
  songbeats[40]=20.686;
  songbeats[41]=20.921;
  songbeats[42]=21.155;
  songbeats[43]=21.389;
  songbeats[44]=21.624;
  songbeats[45]=21.858;
  songbeats[46]=22.092;
  songbeats[47]=22.327;
  songbeats[48]=22.561;
  songbeats[49]=22.796;
  songbeats[50]=23.030;
  songbeats[51]=23.264;
  songbeats[52]=23.733;
  songbeats[53]=23.967;
  songbeats[54]=24.202;
  songbeats[55]=24.436;
  songbeats[56]=24.671;
  songbeats[57]=24.905;
  songbeats[58]=25.139;
  songbeats[59]=25.608;
  songbeats[60]=25.842;
  songbeats[61]=26.077;
  songbeats[62]=26.311;
  songbeats[63]=26.546;
  songbeats[64]=26.780;
  songbeats[65]=27.014;
  songbeats[66]=27.249;
  songbeats[67]=27.483;
  songbeats[68]=27.717;
  songbeats[69]=27.952;
  songbeats[70]=28.186;
  songbeats[71]=28.421;
  songbeats[72]=28.655;
  songbeats[73]=28.889;
  songbeats[74]=29.124;
  songbeats[75]=29.358;
  songbeats[76]=29.592;
  songbeats[77]=29.827;
  songbeats[78]=30.061;
  songbeats[79]=30.296;
  songbeats[80]=30.530;
  songbeats[81]=30.764;
  songbeats[82]=31.233;
  songbeats[83]=31.467;
  songbeats[84]=31.702;
  songbeats[85]=32.171;
  songbeats[86]=32.405;
  songbeats[87]=32.639;
  songbeats[88]=32.874;
  songbeats[89]=33.108;
  songbeats[90]=33.342;
  songbeats[91]=33.577;
  
  
  
  /*float lifespan=60;
  lifespan-=60;
  if(lifespan<0){
    
  }*/
}

void circles(int ar, int cs){
  circleX[0]=77;
  circleX[1]=144;
  circleX[2]=212;
  circleX[3]=180;
  circleX[4]=248;
  circleX[5]=328;
  circleX[6]=365;
  circleX[7]=328;
  circleX[8]=216;
  circleX[9]=172;
  circleX[10]=216;
  circleX[11]=288;
  circleX[12]=288;
  circleX[13]=363;
  circleX[14]=392;
  circleX[15]=360;
  circleX[16]=312;
  circleX[17]=444;
  circleX[18]=444;
  circleX[19]=368;
  circleX[20]=264;
  circleX[21]=217;
  circleX[22]=120;
  circleX[23]=171;
  circleX[24]=100;
  circleX[25]=151;
  circleX[26]=292;
  circleX[27]=296;
  circleX[28]=300;
  circleX[28]=257;
  circleX[29]=148;
  circleX[30]=428;
  circleX[31]=471;
  circleX[32]=446;
  circleX[33]=432;
  circleX[34]=380;
  circleX[35]=304;
  circleX[36]=231;
  circleX[37]=128;
  circleX[38]=132;
  circleX[39]=118;
  circleX[40]=192;
  circleX[41]=239;
  circleX[42]=345;
  circleX[43]=239;
  circleX[44]=192;
  circleX[45]=220;
  circleX[46]=220;
  circleX[47]=292;
  circleX[48]=292;
  circleX[49]=220;
  circleX[50]=142;
  circleX[51]=50;
  circleX[52]=82;
  circleX[53]=170;
  circleX[54]=188;
  circleX[55]=156;
  circleX[56]=200;
  circleX[57]=276;
  circleX[58]=430;
  circleX[59]=352;
  circleX[59]=310;
  circleX[60]=352;
  circleX[61]=308;
  circleX[62]=268;
  circleX[63]=248;
  circleX[64]=260;
  circleX[65]=
  
  
  //ellipse(circleX[i], circleY[i], cs*7,cs*7);
}
  
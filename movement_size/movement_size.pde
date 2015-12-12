float r = 0;
int x = 0;
int y  = 0;
//this takes the amout moved and traslates it to 
void setup(){
  size(500,500);
}

void draw(){
  r = r+.1;
  background(0);
  x = x-1;
  y = y-1;
 rectMode(CENTER);

 translate(mouseX,mouseY) ;
 
 fill(255);
 float d= 20;
d = d+ abs((mouseX-pmouseX)*2);
println(d);
rotate(d/50);
fill(255);
 rect(0,0,d,d);
 rect(100,0,d,d);
 rect (0,100,d,d);
 rect(100,100,d,d);
  
 rect(-100,0,d,d);
 rect (0,-100,d,d);
 rect(-100,-100,d,d);
 if(d>70){
   fill(30,100,255);
   rect(0,0,300,300);
   noFill();
 }
 

 
 
 
 if(mousePressed){

   }
}
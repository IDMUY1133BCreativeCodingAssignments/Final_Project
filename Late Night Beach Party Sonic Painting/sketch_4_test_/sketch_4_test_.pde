// This is a semi-abstract sonic painting of a party at the beach. 
//The birds, stars(white dots), and tree are all influenced by factors of the song playing.
//the sun and rays also moved based on sound, as shown below, and the waves are extractions of literal Waveforms

// importing minim
import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

// global variables used particularly with minim
Minim minim; // start Minim library
AudioPlayer player; // player is the name of AudioPlayer
BeatDetect beat; //Beat detector beat
BeatListener listener; // beat listener listener
float counter =0;//counter for tree
float angle; //angle changing for tree based on sound 
int x = 0; 
PImage img;//seagull image
int shift = 20; //initial shift for seagull
BeatSensor sensor; //creating BeatSensor called sensor
int currentTrack = 0; // first track in array
String[] soundtrack = new String [2]; { //array to hold song
 soundtrack[0]="groove.mp3"; //1st song
 soundtrack[1]="Time (Darius Remix).wav"; //2nd song
}

class BeatListener implements AudioListener // class used for sound implementation, variables kept private to maintain within class
{
  private BeatDetect beat;
  private AudioPlayer player;
  BeatListener(BeatDetect beat, AudioPlayer player)
  //NOTE THIS=this instance of an object, reflexive, way to refer to itself
  {this.beat = beat; //symmetry method 
    this.player = player;
    this.player.addListener(this);
  }
  void samples(float[] samps)
  {beat.detect(player.mix);
  }void samples(float[] sampsL, float[] sampsR) // Reffered to Processing minim examples
  {beat.detect(player.mix);
  }  
}

class BeatSensor implements AudioListener { //class used for sound implementation, variables kept private to maintain within class
  private BeatDetect beat;
  private AudioPlayer song;
   
  BeatSensor(BeatDetect beat, AudioPlayer song) {
    this.song = song;
    this.song.addListener(this);
    this.beat = beat;
  }
   
  void samples(float[] s1) { //detect beat s1
    beat.detect(song.mix);
  }
   
  void samples(float[] s2, float[] s3) { //detect beat s2,s3
    beat.detect(song.mix);
  }
}



void setup() {
  // background(21,57,69);
  size(1100, 600, P3D); //for 3 dimension use
  //allow loading files in data directory
  minim = new Minim(this); 
  // load the audio track in data directory
  player = minim.loadFile(soundtrack[currentTrack]);//load track 
  player.play();// play track

  beat = new BeatDetect(player.bufferSize(), player.sampleRate()); // new listener that doesn't miss buffers
  beat.setSensitivity(50);// setting sensitivity at 50s 
  listener = new BeatListener(beat, player);  
  sensor = new BeatSensor(beat, player);
}

void draw() {
  frameRate(30);
  pushMatrix();
  translate(0, 0, -100);
  fill(2, 15, 40);
  rect(-1000, -1000, width*5, height*5); // manual background
  seagulls();
  tree();
  waves();
  stars();
  sunLines();
  island();
}
  void keyPressed() {

  //Play/pause Player with 's'
  if (key == 's') {
    if (player.isPlaying() ) {
      player.pause();
    } 
    else 
    {
      //player.rewind();
      player.play();}
  }
  if(keyCode == UP){
    currentTrack=1;  
     player = minim.loadFile(soundtrack[currentTrack]);
     player.play();
     beat = new BeatDetect(player.bufferSize(), player.sampleRate());
      sensor = new  BeatSensor(beat,player);    }
  }


void branch(float h) { //constantly changing val by 0.75 
  // each branch is 3/4 size of its predecessor
  h *= 0.75;
// exit condition is when branch smaller than 2 pixels
  if (h > 3) {
    pushMatrix();    // push to maintain no change in subsequent code after pop
    rotate(angle);   // Rotated by angle
    line(0, 0, 0, -h);  // Draw  branch
    translate(0, -h); // translate to end of branch
    branch(h);       // same method, called within method, due to recursive
    popMatrix();     // pop matrix to balance push 
    // same process for left branch
    pushMatrix();
    rotate(-angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    popMatrix();
  }
}

 void waves(){ 
  for (int m = 0; m < player.bufferSize() - 1; m+=200) //m is new i 
  {
    stroke(220);
    strokeWeight(0.05);
    float x1 = map( m, 0, player.bufferSize(), 0, width );//map buffersize
    float x2 = map( m+1, 0, player.bufferSize(), 0, width );
    line( x1, 50 + player.left.get(m)*200, x2, 50 + player.left.get(m+1)*200 ); //draw line using left, right to graph wavelength
    fill(0, 150, 253, 248);
    beginShape(); //drawing waves using verticies on screen and wavelength
    vertex(0, 600); 
    vertex(1100, 600);
    vertex(x1, 520 + player.left.get(m)*90);
    vertex(x2, 520 + player.left.get(m+1)*90);
    //for (int j =0; j<width-1; j++) {
    //vertex(x1+j, player.left.get(m)*200);
    endShape();
    // END WAVES 
    }
  }
  
  void stars(){
    //STARS
  
  if (beat.isHat()) { //pulsate stars with hat
    strokeWeight(1);
    stroke(#BFFA00);
    fill(255, 255, 255, 200);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 300), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
    ellipse(random(600, 1000), random(0, 200), 10, 10);
  }
  }
  
  void seagulls(){
     //SEAGULLS
   img = loadImage("seagull.png"); ///loading seagull image, making several seagulls near each other than move based on shift. val
    image (img,180+5*shift,200+5*shift,50,55);
    image (img,220+5*shift,160+5*shift,50,55);
    image (img,260+5*shift,180+5*shift,50,55);
    image (img,280+5*shift,140+5*shift,50,55);
    image (img,290+5*shift,220+5*shift,50,55);
    image (img,320+5*shift,190+shift,50,55);
    image (img,320+5*shift,100+shift,50,55);
    image (img,140+5*shift,90+shift,50,55);
    image (img,340+5*shift,110+shift,50,55);
    image (img,360+5*shift,150+shift,50,55);
    image (img,350+5*shift,80+shift,50,55);
    image (img,380+5*shift,180+3*shift,50,55);
    image (img,320+5*shift,150+3*shift,50,55);
    image (img,310+5*shift,210+3*shift,50,55);
    image (img,235+5*shift,100+3*shift,50,55);
    image (img,220+5*shift,80+3*shift,50,55);
    image (img,250+5*shift,120+3*shift,50,55);
    image (img,270+5*shift,100+3*shift,50,55);
    image (img,290+5*shift,90+3*shift,50,55);
    image (img,280+5*shift,95+3*shift,50,55);
    if(beat.isSnare()){ //move seagulls on snare
      shift+=1.5;
    }
  }
  //END SEAGULLS
  
  void tree(){
    // TREE 
    strokeWeight(3);
    stroke(#03AA60); 
  if (beat.isHat() ) counter++; 
  float a = (counter*100 / (float) width) * 90f;
  // Convert it to radians
  angle = radians(a);
  //place tree on sandy rock
  translate(1000,505);
  // Draw a line 120 pixels
  line(0,0,0,-90);
  // Move to the end of that line
  translate(0,-90);
  // branching-recursive
  branch(90);
  popMatrix();
  // END TREE 
  
  }
  void sunLines(){
  translate(0, 0, 5); 
  rect(0, 20, 50, 50); //rect to show clear image of line motion, color turns white in conjunction with illumination of stars based off hat
  color(0);
  stroke(0);
  pushMatrix();
  for (int i = 0; i < player.bufferSize() - 1; i+=1) //similar strategy used for waves for mapping wavelengths
  {
    strokeWeight(5.5);
    float x1 = map( i, 0, player.bufferSize(), 0, width ); // going through bits per sample
    float x2 = map( i+1, 0, player.bufferSize(), 0, width );
    stroke(#92FF05);// green
    line( x1, 50 + player.left.get(i)*20, x2, 50 + player.left.get(i+1)*20 );// 
    stroke(#FF00E6);// pink
    line( x1, 350 + player.right.get(i)*50, x2, 350 + player.right.get(i+1)*50 );// 
    rotate(PI/3.0);
    stroke(#03FFE8); // turqoise 
    line( x1, 50 + player.left.get(i)*4, x2, 50 + player.left.get(i+1)*4 );//  
    stroke(#FFB700); //orange
    line( x1, 350 + player.right.get(i)*5, x2, 350 + player.right.get(i+1)*5 );// orange
    stroke(#FF0324); //red
    line( x1, 60 + player.left.get(i)*60, x2, 60 + player.left.get(i+1)*60 );// violet
    stroke(#FFE600);// blue
    line( x1, 360 + player.right.get(i)*60, x2, 360 + player.right.get(i+1)*60 );
    rotate(PI/4.0); 
    strokeWeight(8.5);
    stroke(#03FFE8); // turqoise 
    line( x1, 50 + player.left.get(i)*4, x2, 50 + player.left.get(i+1)*4 );// turq 
    stroke(#FFB700);//orange
    line( x1, 350 + player.right.get(i)*5, x2, 350 + player.right.get(i+1)*5 );// orange
    stroke(#F2ED5A);//yellow, to make sun more clear
    line( x1, 60 + player.left.get(i)*60, x2, 60 + player.left.get(i+1)*60 );// violet 
    line( x1, 360 + player.right.get(i)*60, x2, 360 + player.right.get(i+1)*60 );
  }
  popMatrix();
  }
  //END SUNLINES
  
  void
  island(){ //drawing sandy rock island
    noStroke();
    fill(#B7B467);
    ellipse(1000, 600, 300, 300); //base for island
    stroke(0);
    strokeWeight(2.5);
    point(1020, 550);//dots on sand 
    point(990, 515);//dots on sand
    point(1060, 530);//dots on sand
    point(1060, 580);// dots on sand
    point(940, 520);// dots on sand
  }
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
//FFT fft; // FFT stands for Fast Fourier Transform - audio to visual analysis
BeatDetect beat; //Beat detector beat
BeatListener listener; // beat listener listener
float counter =0;
float theta; //angle changing for tree
int totKicks = 0;
int x = 0; 
int count2; 
PImage img;
int shift = 20;



float kickSize, snareSize, hatSize; 

class BeatListener implements AudioListener // class used for sound implementation, variables kept private to maintain within class
{
  private BeatDetect beat;
  private AudioPlayer player;

  BeatListener(BeatDetect beat, AudioPlayer player)
  {
    this.beat = beat;
    this.player = player;
    this.player.addListener(this);
  }
  void samples(float[] samps)
  {
    beat.detect(player.mix);
  }

  void samples(float[] sampsL, float[] sampsR) // Processing minim ex.
  {
    beat.detect(player.mix);
  }
}


void setup() {
  // background(22,25,59);
  size(1100, 600, P3D); //for 3 dimension use
  //allow loading files in data directory
  minim = new Minim(this); 
  // load the audio track in data directory
  player = minim.loadFile("marcus_kellis_theme.mp3");//load track
  player.play();// play track

  beat = new BeatDetect(player.bufferSize(), player.sampleRate()); // new listener that doesn't miss buffers
  beat.setSensitivity(50);// setting sensitivity at 50s 
  listener = new BeatListener(beat, player);  
  textFont(createFont("Helvetica", 16));
  textAlign(CENTER);
}

void draw() {
  frameRate(30);
  pushMatrix();
  translate(0, 0, -100);
  fill(2, 15, 40);
  rect(-1000, -1000, width*5, height*5);
  if (beat.isHat()) {
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
   img = loadImage("seagull.png");
   
  /* image (img,280,200,50,55);
    image (img,320,160,50,55);
    image (img,360,180,50,55);
    image (img,380,140,50,55);
    image (img,390,220,50,55);
    image (img,420,190,50,55);
    image (img,420,100,50,55);
    image (img,240,90,50,55);
    image (img,440,110,50,55);
    image (img,460,150,50,55);
    image (img,450,80,50,55);
    */
    
      
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
    if(beat.isSnare()){
      shift+=5;
    }
    
    strokeWeight(3);
    stroke(#03AA60);
    
    if (beat.isHat() ) counter++; 
  float a = (counter*100 / (float) width) * 90f;
  // Convert it to radians
  theta = radians(a);
  // Start the tree from the bottom of the screen
  translate(1000,560);
  // Draw a line 120 pixels
  line(0,0,0,-90);
  // Move to the end of that line
  translate(0,-90);
  // Start the recursive branching!
  branch(90);


    
    


    

    
    

  popMatrix();
  translate(0, 0, 5);
  rect(0, 20, 50, 50);
  color(0);
  stroke(0);
  pushMatrix();
  for (int i = 0; i < player.bufferSize() - 1; i+=1)
  {
    strokeWeight(5.5);
    float x1 = map( i, 0, player.bufferSize(), 0, width ); //bits per sample
    float x2 = map( i+1, 0, player.bufferSize(), 0, width );
    stroke(#92FF05);// green
    line( x1, 50 + player.left.get(i)*20, x2, 50 + player.left.get(i+1)*20 );// 
    stroke(#FF00E6);// pink
    line( x1, 350 + player.right.get(i)*50, x2, 350 + player.right.get(i+1)*50 );// red
    rotate(PI/3.0);
    stroke(#03FFE8); //orange 
    line( x1, 50 + player.left.get(i)*4, x2, 50 + player.left.get(i+1)*4 );// turq 
    stroke(#FFB700);
    line( x1, 350 + player.right.get(i)*5, x2, 350 + player.right.get(i+1)*5 );// orange
    stroke(#FF0324); //blue
    line( x1, 60 + player.left.get(i)*60, x2, 60 + player.left.get(i+1)*60 );// violet
    stroke(#FFE600);// 
    line( x1, 360 + player.right.get(i)*60, x2, 360 + player.right.get(i+1)*60 );

    rotate(PI/4.0); 
    strokeWeight(8.5);
    stroke(#03FFE8); //orange 
    line( x1, 50 + player.left.get(i)*4, x2, 50 + player.left.get(i+1)*4 );// turq 
    stroke(#FFB700);
    line( x1, 350 + player.right.get(i)*5, x2, 350 + player.right.get(i+1)*5 );// orange
    stroke(#F2ED5A);
    line( x1, 60 + player.left.get(i)*60, x2, 60 + player.left.get(i+1)*60 );// violet 
    line( x1, 360 + player.right.get(i)*60, x2, 360 + player.right.get(i+1)*60 );
  }
  popMatrix();


  //WAVES

  for (int m = 0; m < player.bufferSize() - 1; m+=200) //m is new i 
  {
    stroke(220);
    strokeWeight(0.05);
    float x1 = map( m, 0, player.bufferSize(), 0, width );
    float x2 = map( m+1, 0, player.bufferSize(), 0, width );
    line( x1, 50 + player.left.get(m)*200, x2, 50 + player.left.get(m+1)*200 );
    fill(0, 150, 253, 248);
    beginShape();
    vertex(0, 600); 
    vertex(1100, 600);
    vertex(x1, 520 + player.left.get(m)*90);
    vertex(x2, 520 + player.left.get(m+1)*90);
    //for (int j =0; j<width-1; j++) {
    //vertex(x1+j, player.left.get(m)*200);
    endShape();

    // END WAVES 


    //island
    noStroke();
    fill(#B7B467);
    ellipse(1000, 600, 300, 200);
    stroke(0);
    strokeWeight(2.5);
    point(1020, 550); 
    point(990, 515);
    point(1060, 530);
    point(1060, 580);
    point(940, 520);

    //TREE

    



    //(random(800,1000),random(20,100),20,20);
  }
}

    
   
   







void keyPressed() {


  // Play. pause song with s
  if (key == 's') {
    if (player.isPlaying()) {
      player.pause();
    } else if (player.position() == player.length()) {
      player.rewind();
      player.play();
    } else {
      player.play();
    }
  }
}

void branch(float h) {
  // every branch is 1/2 size of previous
  h *= 0.75;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    pushMatrix();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);   // Rotate by theta
    line(0, 0, 0, -h);  // Draw the branch
    translate(0, -h); // Move to the end of the branch
    branch(h);       // Ok, now call myself to draw two new branches!!
    popMatrix();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    pushMatrix();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    popMatrix();
  }
}
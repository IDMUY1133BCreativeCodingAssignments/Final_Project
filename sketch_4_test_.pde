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
BeatDetect beat; 
BeatListener bl; 

float kickSize, snareSize, hatSize;

class BeatListener implements AudioListener
{
  private BeatDetect beat;
  private AudioPlayer source;
  
  BeatListener(BeatDetect beat, AudioPlayer source)
  {
    this.source = source;
    this.source.addListener(this);
    this.beat = beat;
  }
  
  void samples(float[] samps)
  {
    beat.detect(source.mix);
  }
  
  void samples(float[] sampsL, float[] sampsR)
  {
    beat.detect(source.mix);
  }
}



void setup() {
  background(255);
  size(600,600, P3D);
//allow loading files in data directory
  minim = new Minim(this);
//println(minim);
  // load the audio track in data directory
  player = minim.loadFile("marcus_kellis_theme.mp3");
  player.play();

  // FFT object with time domain buffer
  beat = new BeatDetect(player.bufferSize(), player.sampleRate());
  beat.setSensitivity(50);
   kickSize = snareSize = hatSize = 16;
  // make a new beat listener, so that we won't miss any buffers for the analysis
  bl = new BeatListener(beat, player);  
  textFont(createFont("Helvetica", 16));
  textAlign(CENTER);
  
  
}

void draw() {
 //background(255);
  rect(0, 20, 50, 50);
  color(0);
  stroke(0);
   for(int i = 0; i < player.bufferSize() - 1; i++)
  {
    float x1 = map( i, 0, player.bufferSize(), 0, width );
    float x2 = map( i+1, 0, player.bufferSize(), 0, width );
    stroke(#FF00E6);//pink
    line( x1, 50 + player.left.get(i)*20, x2, 50 + player.left.get(i+1)*20 );// 
    stroke(#92FF05);// green
    line( x1, 350 + player.right.get(i)*50, x2, 350 + player.right.get(i+1)*50 );// red
    rotate(PI/3.0); 
    stroke(#FFB700);
    line( x1, 50 + player.left.get(i)*4, x2, 50 + player.left.get(i+1)*4 );// turq 
    stroke(#03FFE8);
    line( x1, 350 + player.right.get(i)*5, x2, 350 + player.right.get(i+1)*5 );// orange
    stroke(#0091FC); //blue
    line( x1, 60 + player.left.get(i)*60, x2, 60 + player.left.get(i+1)*60 );// violet
    stroke(#FF0324);// red
    line( x1, 360 + player.right.get(i)*60, x2, 360 + player.right.get(i+1)*60 );
    //pushMatrix();
    //popMatrix();
    fill(0);   
  if ( beat.isKick() ) kickSize = 32;
  if ( beat.isSnare() ) snareSize = 32;
  if ( beat.isHat() ) hatSize = 32;
  textSize(kickSize);
  text("KICK", width/4, height/2);
  textSize(snareSize);
  text("SNARE", width/2, height/2);
  textSize(hatSize);
  text("HAT", 3*width/4, height/2);
  kickSize = constrain(kickSize * 0.95, 16, 32);
  snareSize = constrain(snareSize * 0.95, 16, 32);
  hatSize = constrain(hatSize * 0.95, 16, 32);
 
    
    
    
  }
}

/*void redraw(){
background(255); 
}
*/
void keyPressed() {
  
  println("hello");

  // for player, spacebar is start song
  if (key == ' ') {
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
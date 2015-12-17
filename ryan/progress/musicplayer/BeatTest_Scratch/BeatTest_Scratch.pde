import ddf.minim.*;
import ddf.minim.analysis.*;

Minim minim;
AudioPlayer player;

void setup() {
  // create window in 720p and with Z-axis
  size(1280, 720, P3D);
  noCursor();

  // allow loading files in data directory
  minim = new Minim(this);

  // load the audio track in data directory
  player = minim.loadFile("mano.mp3");
}

void draw() {
  background(0);
  stroke(255);
  ellipse(mouseX,mouseY,10,10);
}

// press SPACEBAR to start playing
void keyPressed() {
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
PImage img;
int x, y;
void setup()
{
  size(1000, 200);  
  img = loadImage("Map_90.1.png");
}
void draw() {
  frameRate(100); 
  bakground();
  
}



void bakground(){
  
        //  background(0); 
      // not needed as image is bigger than size 
      // and thus overwrites all areas
      //x = constrain(x, 0, img.height - height);    
      // ensures that "scrolling" stops at right end of image
      y = constrain(y, 0, img.width - width); 
      // Not needed here, as scolling only in x
      image(img, -y, 0);  
      // overwrites the whole screen with the "shifted" image
      y = frameCount;     
      // advances the image with each new frame
      // do whatever is wanted from here on 
      // like after a call of background();
      stroke(0, 0, 0);
      ellipse(mouseX, mouseY, 15, 15);
}

void back(){
   y = constrain(y, 0, img.width - width); 
      image(img, -y, 0); 
      y = frameCount;     
}
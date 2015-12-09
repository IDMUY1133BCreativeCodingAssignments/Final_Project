// main file that will bring everything together
// call all other classes here 
var stage1;
var char1;
var sheet; //creates te sheet var 
var straw; // name of the animation


function preload() {
  // specify width and height of each frame and number of frames
  sheet =  loadSpriteSheet("C:\Users\jackt_000\Desktop\CCFinalUpdate4\folder\media/spritesheet.png", 153, 208, 5); // loads the sprite sheet like an image
  straw = loadAnimation(sheet); // turns the image into an animation

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    stage1 = new Stage();
    
    char1 = new Character();
    
}

function draw(){
 clear();
    stage1.display();

  char1.anim();    
   //ellipse(100, 100, 50, 50);
}



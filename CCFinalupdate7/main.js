// main file that will bring everything together
// call all other classes here 
var stage1;
var char1;

var straw; // name of the animation


function preload(){
 //  specify width and height of each frame and number of frames
  // loads the sprite sheet like an image
//  straw = loadAnimation("assets/strawberry_fighter000000.png", "assets/strawberry_fighter000002.png"); // turns the image into an animation

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    stage1 = new Stage();
    
    char1 = new Character();
     char1.anim(); 
    console.log(char1);
    
}

function draw(){
   
    stage1.display();
    stage1.boundries();
    char1.walking();
    
   
       
  // ellipse(100, 100, 50, 50);
}

function mouseClicked(){
    removeSprite(ghost);
    removeSprite(straw);
    setup();
 
    
      }
  



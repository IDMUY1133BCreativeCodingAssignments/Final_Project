// main file that will bring everything together
// call all other classes here 
var stage1;
var char1;

var straw; // name of the animation
var mySound;
var punch;
function preload(){
    soundFormats("mp3");
    mySound = loadSound("assets/Fight_Music.mp3");
    punch = loadSound("assets/Punch.mp3");
  

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    stage1 = new Stage();
    
    char1 = new Character();
    char1.anim(); 
    stage1.display();
    
}

function draw(){
   
    
    stage1.rest();
    stage1.boundries();
    char1.walking();
    
   
       
  // ellipse(100, 100, 50, 50);
}

function mouseClicked(){
    removeSprite(ghost);
    removeSprite(straw);
    mySound.stop();
    setup();
 
    
      }
  



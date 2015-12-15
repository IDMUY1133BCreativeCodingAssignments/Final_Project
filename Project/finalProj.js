//galaxy builder: http://29a.ch/sandbox/2011/neonflames/# for inspo
//the person also put up a github of his code for that ^ look at it for help
// give person the option of adding little stars too:http://billsnyderastrophotography.com/wp-content/uploads/2012/10/M31-Andromeda-Galaxy_color-from-Martin-Resize.jpg 

//luminescent stars and stuff
//when they press down the mouse different bits of music play (but only when they press)  
//work on drawing when the person clicks 
//let them draw their own constellations? :http://p5js.org/examples/demos/Hello_P5_Drawing.php 
//http://zenbullets.com/book.php 

// 4 7 8 breathing

//GOAL: GET BRUSHSTROKES TO COME OUT WHEN MOUSE PRESSED 

//part space maker part relaxation space 
//Relaxation Space Maker ?

//http://p5play.molleindustria.org/examples/index.html?fileName=collisions4.js 
//a sound section: every time a thing bounces it makes a sound? 

//https://processing.org/examples/tree.html <- use for earth?

//toggle timer!!!

//consider  making multiple of all the objects on breathing part 

//look at tickle p5.js example for mouseOver help 

//user can pluck petals/do stuff with flower once it is done loading maybe? (or incorporate that into the building mode) 

//http://thisissand.com INSPO
//http://www.likethisforever.com
//http://www.ferryhalim.com/orisinal/g3/bells.htm 


//okay for the generative drawing part
//maybe just have particles look identical, but their velocity and acceleration is based on the type they are 
//things left to do

//set up circles that when user hovers over them, and clicks, it changes the color to that 
//construct four different particle systems
//when particles from them interact, things change 
//one additional class? or two?

//or come up with something completely different (like this thissand.com thing) 
var red; //global variable for maximum scope of colors 
var orange;
var yellow;
var green;
var blue;
var violet;
var white;
var black;
var lightblue;
var whichColor; 
var mint; 
var indigo;

var balloon; // all the buttons
var flower;
var bubbles;
var flames; 
var experiment; 
var button;

var bubbLocY = windowHeight/2; 

//all the sound variables
var fireSound;
var airSound;
var waterSound;
var earthSound;
var bubbleSound;

var balloonPressed = false;
var flowerPressed = false;
var bubblesPressed = false;
var flamesPressed = false;
var exPressed = false;

var testBubble;
var testCandle;

function preload(){
    fireSound = loadSound("sounds/fireplace.mp3");
    airSound = loadSound("sounds/wind-chimes.mp3");
    earthSound = loadSound("sounds/rustle.mp3");
    waterSound = loadSound("sounds/rain.mp3");   
    bubbleSound = loadSound("sounds/bubble.mp3");
    background(127);
}
    
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);
    earthSound.setVolume(2); //will this make it louder?
    //the colors that you can choose from
    setColors();
    makeButtons();
    testBalloon = new Balloon();
    testBubble = new Bubble();
    testFlower = new Flower();
    testCandle = new Candle();
}

function draw(){
    
    if(balloonPressed){ 
        testBalloon.breathe();
        testBalloon.breatheDisplay(red);
    }
    if(flowerPressed){
        testFlower.breathe(mint, red);
        testFlower.breatheDisplay(yellow);
    }
    if(flamesPressed){
        testCandle.breathe();
        testCandle.breatheDisplay(yellow, red, green, blue);
    }
    if(bubblesPressed){
        testBubble.breathe();
        testBubble.breatheDisplay(blue, lightblue);
    }
    displaySeconds(); 
}

function setColors(){ //defines all the colors needed for program 
    red = color(255, 144, 134);
    orange = color(235, 173, 86);
    yellow = color(252, 220, 0);
    green = color(118, 225, 115);
    blue = color(93, 198, 225);
    violet = color(134, 67, 252);
    white = color(255, 255, 255);
    black = color(0, 0, 0);
    lightblue = color(172, 224, 242);
    mint = color(146, 225, 171);
    indigo = color(126, 135, 252);    
}

function makeButtons(){ //creates the buttons needed for the program 
    balloon = createButton('balloon');
    balloon.position(windowWidth/5, 0);
    balloon.mousePressed(baPressed);
    flower = createButton('flower');
    flower.position(windowWidth/4, 0);
    flower.mousePressed(floPressed);
    bubbles = createButton('bubbles');
    bubbles.position(windowWidth/3, 0);
    bubbles.mousePressed(buPressed);
    flames = createButton('flames');
    flames.position(windowWidth/2, 0);
    flames.mousePressed(fPressed);
    experiment = createButton('Experimental Room'); 
    experiment.position(50, 0);
    experiment.mousePressed(exPressed); //call thing that makes the objects ? or just make boolean true like it is righ tnow 
}

function welcomeText(){
    textSize(32);
    text("Welcome to the relaxation space! You can either practice meditative breathing or go to the experimental room to manipulate the elements. A couple notes before you begin: ");
    text("The meditative breathing follows this pattern. Breathe in for 4 seconds, hold your breath for 7, and exhale for 8. Each room should guide you through this process. Do this as many times as you like until you feel calm."); 
    
}
/*
the purpose of the next four functions is to prevent multiple breathing exercises running at once. 
it also restarts all the values
*/
function baPressed(){
    testBalloon.reset();
    adjustSong(airSound);
    balloonPressed = true;
    bubblesPressed = false;
    flamesPressed = false;
    flowerPressed = false;
}

function buPressed(){
    testBubble.reset();
    adjustSong(bubbleSound);
    bubblesPressed = true;
    balloonPressed = false;
    flamesPressed = false;
    flowerPressed = false;
}

function fPressed(){
    testCandle.reset();
    adjustSong(fireSound);
    flamesPressed = true;
    balloonPressed = false;
    flowerPressed = false;
    bubblesPressed = false;
}

function floPressed(){
    testFlower.reset();
    adjustSong(earthSound);
    flowerPressed = true;
    flamesPressed = false;
    balloonPressed = false;
    bubblesPressed = false;
}

function exPressed(){
    flowerPressed = false;
    flamesPressed = false;
    balloonPressed = false;
    bubblesPressed = false;
    exPressed = true;
    
}

function adjustSong(theSong){ //find out how to get a song playing at the time stop playing 
    if(theSong.isPlaying()){
     theSong.stop();   
    }
    theSong.play();
    theSong.loop();
}

function chooseColor(){
    
}

function displaySeconds(){
    push();
    fill(255);
    rect(0, 0, 40, 40);
    fill(0);
    textSize(30);
    text(second(), 5, 35);
    pop();
}

/*
function runAgain(){ //used to go through breathing thing again after running once. 
     milliseconds = millis();
    fourSecond = milliseconds + 4000;
    sevenSecond = fourSecond + 7000;
    eightSecond = sevenSecond + 8000; 
}
*/
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

var ballLocX;
var ballLocY;
var bubbLocX = windowWidth/2;
var bubbLocY = windowHeight/2; 
var bubbLocationsX = [];
var bubbLocationsY = [];
var candLocX;
var candLocY; 
var cand2LocX;
var cand2LocY;
var cand3LocX;
var cand3LocY; 

//used for calculating duration of breathine exercises 
var theSec;
var fourSecond;
var sevenSecond;
var eightSecond;
var milliseconds; 

//all the sound variables
var fireSound;
var airSound;
var waterSound;
var earthSound;
var bubbleSound;

//have array of triangle coordinates 
var translateY = 10;

//used for counting seconds 
var run = 1;

var balloonPressed = false;
var flowerPressed = false;
var bubblesPressed = false;
var flamesPressed = false;
var exPressed = false;

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
    
    ballLocX = windowWidth/2;
    ballLocY = windowHeight/2;
    bubbLocX = windowWidth/2;
    bubbLocY = windowHeight/2;
    candLocY = 30; 
    cand2LocY = 30;
    cand3LocY = 30;

}

function draw(){
    var currentTime = millis();
    
    if(balloonPressed){ 
        airBreath(); 
    }
    if(flowerPressed){
        earthBreath();
    }
    if(flamesPressed){
        fireBreath();
    }
    if(bubblesPressed){
        waterBreath();
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
    adjustSong(airSound);
    translateY = 10;
    run = 1;
    balloonPressed = true;
    bubblesPressed = false;
    flamesPressed = false;
    flowerPressed = false;
}

function buPressed(){
    adjustSong(bubbleSound);
    run = 1;
    bubbLocX = windowWidth/2;
    bubbLocY = windowHeight/2;
    bubblesPressed = true;
    balloonPressed = false;
    flamesPressed = false;
    flowerPressed = false;
}

function fPressed(){
    adjustSong(fireSound);
    run = 1;
    flamesPressed = true;
    balloonPressed = false;
    flowerPressed = false;
    bubblesPressed = false;
}

function floPressed(){
    adjustSong(earthSound);
    run = 1;
    flowerPressed = true;
    flamesPressed = false;
    balloonPressed = false;
    bubblesPressed = false;
}

function exPressed(){
    run = 1;
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

function airBreath(){
    if(run == 1){
    milliseconds = millis();  
    fourSecond = milliseconds + 4000;
    sevenSecond = fourSecond + 7000;
    eightSecond = sevenSecond + 8000;
    run = 2; //prevents milliSeconds from updating over and over again 
    }
    background(158, 212, 255);
    stroke(0);
    strokeWeight(1);
    fill(red);
    push();
    if(millis()< fourSecond){
        translateY = translateY - 1;
    }
    else if(millis() < sevenSecond){
        translateY = translateY - random(-.5, .5);
    }
   else if(millis() < eightSecond){
        translateY = translateY + .5;
   }
    else if(millis() > eightSecond){
     runAgain();
     background(158, 212, 255);
    }
    translate(0, translateY);
    noFill();
    //bezier(622, 379, 577, 384, 662, 464, 588,454); //fix this, it doesn't line up properly 
    bezier(ballLocX, ballLocY, ballLocX - 5, ballLocY + 30, ballLocX + 5, ballLocY + 50, ballLocX - 10, ballLocY + 80);
    fill(red);
    noStroke();
    triangle(ballLocX, ballLocY+10, ballLocX - 10, ballLocY + 40, ballLocX + 10,  ballLocY + 40);
    ellipse(ballLocX, ballLocY, 60, 65);
    pop();
}


function earthBreath(){ //http://p5js.org/examples/demos/Hello_P5_Simple_Shapes.php
    if(run == 1){
    background(mint); 
    milliseconds = millis();  
    fourSecond = milliseconds + 4000;
    sevenSecond = fourSecond + 7000;
    eightSecond = sevenSecond + 8000;
    run = 2;
    }
    push();
    fill(red, 150);
    noStroke();
    translate(windowWidth/2, windowHeight/2)
    if(millis()<fourSecond){
        rotate(PI/3);
        ellipse(0, 30, 20, 80);
        rotate(PI/3);
        ellipse(0, 30, 20, 80);
    }
    else if(millis() < sevenSecond){
        rotate(PI);
        ellipse(0, 30, 20, 80);
        rotate(PI);
        ellipse(0, 30, 20, 80);
    }
   else if(millis() < eightSecond){
       rotate(5*PI/3);
        ellipse(0, 30, 20, 80);
       rotate(5*PI/3);
       ellipse(0, 30, 20,80);
    }
     else if(millis() > eightSecond){
     runAgain();
    }
    pop();
    fill(yellow);
    noStroke();
    ellipse(windowWidth/2, windowHeight/2, 20, 20);
}
    
function fireBreath(){
    //melting candle
    background(180);
    noStroke();
    fill(yellow);
    triangle(windowWidth/2 + 1, windowHeight/2-60, windowWidth/2 + 39, windowHeight/2 - 60, windowWidth/2 + 20, windowHeight/2-100);
    ellipse(windowWidth/2 + 20, windowHeight/2 - 60, 35, 40);
    if(run == 1){
    milliseconds = millis();  
    fourSecond = milliseconds + 4000;
    sevenSecond = fourSecond + 7000;
    eightSecond = sevenSecond + 8000;
    run = 2;
    }
    push();
    if(millis()<fourSecond){
        candLocY++;
    }
    else if(millis() < sevenSecond){
        cand2LocY++;
    }
   else if(millis() < eightSecond){
       cand3LocY++;
    }
     else if(millis() > eightSecond){
      runAgain();
    }
    noStroke();
    fill(green);
    rect(windowWidth/2, windowHeight/2 - 30, 40, candLocY); //fix these a little 
    fill(red);
    rect(windowWidth/2, windowHeight/2, 40, cand2LocY);
    fill(blue);
    rect(windowWidth/2, windowHeight/2 + 30, 40, cand3LocY);
    pop();

}

function waterBreath(){ //add bubble details later  (little white reflective part)
    background(blue);
    if(run == 1){
    milliseconds = millis();  
    fourSecond = milliseconds + 4000;
    sevenSecond = fourSecond + 7000;
    eightSecond = sevenSecond + 8000;
    run = 2;
    }
   
    if(millis()<fourSecond){
        bubbLocY = bubbLocY - 1 ;
    }
    else if(millis() < sevenSecond){
        bubbLocY = bubbLocY;
    }
   else if(millis() < eightSecond){
        bubbLocY = bubbLocY + .5;
    }
     else if(millis() > eightSecond){
     runAgain();
    }
    fill(lightblue);
    noStroke();
    ellipse(bubbLocX, bubbLocY, 50, 50);
    var offset = random(-1, 1);
    //bubbLocY++;
    bubbLocX = offset + bubbLocX;
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

function runAgain(){ //used to go through breathing thing again after running once. 
     milliseconds = millis();
    fourSecond = milliseconds + 4000;
    sevenSecond = fourSecond + 7000;
    eightSecond = sevenSecond + 8000; 
}

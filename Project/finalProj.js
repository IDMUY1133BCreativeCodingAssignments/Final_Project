// A reference to our box2d world
var world;
var test = 1;

// A list for all of our particles
var particles = [];

var wall; //our boundary

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
var orangeEx;
var blueEx;
var greenEx;

var particleColor; //color of elemental particle
var type; //type of particle (Earth, air, water, fire)

var balloon; // all the buttons
var flower;
var bubbles;
var flames; 
var experiment; 

//var bubbLocY = windowHeight/2; //deleting this makes the program fail, why ? 

//all the sound variables
var fireSound;
var airSound;
var waterSound;
var earthSound;
var bubbleSound;
var silence;

var balloonPressed = false;
var flowerPressed = false;
var bubblesPressed = false;
var flamesPressed = false;
var expPressed = false;

var testBubble;
var testBalloon;
var testCandle;
var testFlower;

function preload(){ //preload the sounds used in the file
    fireSound = loadSound("sounds/fireplace.mp3");
    airSound = loadSound("sounds/wind-chimes.mp3");
    earthSound = loadSound("sounds/rustle.mp3");
    waterSound = loadSound("sounds/rain.mp3");   
    silence = loadSound("sounds/5min.mp3");
}
    
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(146, 225, 171);
    world = createWorld(); //generates world w/ gravity, etc. for which everything takes place

    world.SetContactListener(new CustomListener()); //"listening" for collisions

    wall = new Boundary(width/2, height-50, width, 20);
    setColors(); //the colors that you can choose from
    makeButtons(); //makes the buttons
    welcomeText(); //makes the text you see at the beginning
    testBubble = new Bubble(); //makes objects for each different breathing button
    testFlower = new Flower();
    testCandle = new Candle();
    testBalloon = new Balloon();
    
    particleColor = black; //same color as the background of the experimental room so particle doesn't show
}

function draw(){    
    if(balloonPressed){ 
        testBalloon.breathe(); //does the "work"
        testBalloon.breatheDisplay(red); //displays the work 
        displaySeconds(); 
    }
    if(flowerPressed){
        testFlower.breathe(mint, red); //bckgFill, colorFill (of petals)
        testFlower.breatheDisplay(yellow); //color of middle
        displaySeconds(); 
    }
    if(flamesPressed){
        testCandle.breathe(); //changing of color happens in breathe function itself
        testCandle.breatheDisplay(yellow); //color of flame
        displaySeconds(); 
    }
    if(bubblesPressed){
        testBubble.breathe();
        testBubble.breatheDisplay(blue, lightblue); //bckgFill, colorFill
        displaySeconds(); 
    }
    if(expPressed){ 
        if(test == 1){ //checks if BACKSPACE has been pressed
            background(0);
        }
        else{
        }
        push();
        fill(255);
        textSize(15);
        text(" Left Arrow: Air \n Right Arrow: Earth \n Up Arrow: Water \n Down Arrow: Fire \n Backspace for drawing!", 15, 80);
        pop();
        var timeStep = 1.0/30; //stepping through time!
        world.Step(timeStep,10,10); // 2nd and 3rd arguments are velocity and position iterations
        if(mouseIsPressed){
             var sz = random(3, 10); //size varies from 3 to 10
             particles.push(new Particle(mouseX, mouseY, sz, particleColor, type)); //generates particles if mouse is pressed 
         }
         for (var i = particles.length-1; i >= 0; i--) {
        particles[i].display(); //shows particles
        if (particles[i].done()) {
            particles.splice(i,1); //removes particles from array
                }
         }
        wall.display(); //shows boundary
        hideSeconds(); //timer unnecessary in experimental room
    } //end of expPressed
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
    orangeEx = color(235, 141, 15);
    blueEx = color(77, 99, 255);
    greenEx = color(0, 161, 64);
}

function makeButtons(){ //creates the buttons needed for the program 
    balloon = createButton('balloon'); //name of button 
    balloon.position(70, 20); //position of button
    balloon.mousePressed(baPressed); //parameter is function taken when button is pressed
    flower = createButton('flower');
    flower.position(130, 20);
    flower.mousePressed(floPressed);
    bubbles = createButton('bubble');
    bubbles.position(190, 20);
    bubbles.mousePressed(buPressed);
    flames = createButton('flames');
    flames.position(250, 20);
    flames.mousePressed(fPressed);
    experiment = createButton('Experimental Room'); 
    experiment.position(310, 20);
    experiment.mousePressed(exPressed); //call thing that makes the objects ? or just make boolean true like it is right now 
}

/** preliminary text user sees upon beginning thing**/ 

function welcomeText(){ 
    textSize(16); //sets size of font
    textFont("Georgia"); //sets font
    text("Welcome to the relaxation space! \nYou can either practice meditative breathing or go to the experimental room to manipulate the elements. \nA couple notes before you begin: ", 0, windowHeight/2);
    
    text("The meditative breathing follows this pattern. \nBreathe in for 4 seconds, hold your breath for 7, and exhale for 8. \nEach room should guide you through this process. \nDo this as many times as you like until you feel calm.", 0, windowHeight/2 + 80); 

    text("\nThe experiment room allows you to play around with the four elements: air, water, earth, and fire.", 0, windowHeight/2 + 160);
    
}

/*
the purpose of the next four functions is to prevent multiple breathing exercises running at once. 
it also restarts all the values
*/

function baPressed(){
    testBalloon.reset(); //resets everytime button is pressed
    stopOthers(airSound); //will stop all the songs but then play the given parameter
    balloonPressed = true; //these statements prevent the other buttons from running
    bubblesPressed = false;
    flamesPressed = false;
    flowerPressed = false;
    expPressed = false;
}

function buPressed(){
    testBubble.reset(bubbleSound);
    stopOthers(waterSound);
    bubblesPressed = true;
    balloonPressed = false;
    flamesPressed = false;
    flowerPressed = false;
    expPressed = false;

}

function fPressed(){
    testCandle.reset();
    stopOthers(fireSound);
    flamesPressed = true;
    balloonPressed = false;
    flowerPressed = false;
    bubblesPressed = false;
    expPressed = false;
}

function floPressed(){
    testFlower.reset();
    stopOthers(earthSound);
    flowerPressed = true;
    flamesPressed = false;
    balloonPressed = false;
    bubblesPressed = false;
    expPressed = false;
}

function exPressed(){
    stopOthers(silence);
    flowerPressed = false;
    flamesPressed = false;
    balloonPressed = false;
    bubblesPressed = false;
    expPressed = true;
}

function stopOthers(keep){
    airSound.stop(); //stops all other sounds 
    fireSound.stop();
    waterSound.stop();
    earthSound.stop();
    silence.stop();
    keep.play(); //will play the parameter song
    
}
function displaySeconds(){ //shows timer for breathing guidance 
    push();
    fill(255);
    rect(0, 0, 55, 55);
    fill(0);
    textSize(30);
    text(second(), 5, 35);
    pop();
}

function hideSeconds(){ //gets rid of timer during experimental part
    push();
    fill(0);
    noStroke();
    rect(0, 0, 55, 55);    
    pop();
}

function keyPressed(){ //changes colors of particles in experimental room 
   if(keyCode == LEFT_ARROW){ //if left arrow pressed, air particles come out
        particleColor = white;
        type = 0;
    }
    
    if(keyCode == RIGHT_ARROW){ //if right arrow pressed, earth particles come out
        particleColor = greenEx;
        type = 1; 
    }
    
    if(keyCode == UP_ARROW){ //if up arrow pressed, water particles come out
        particleColor = blueEx;
        type = 2;
    }
    
    if(keyCode == DOWN_ARROW){ //if down arrow pressed, fire particles comes out
        particleColor = orangeEx;
        type = 3; 
    }
    
    if(keyCode == BACKSPACE){
        test = 2; //activates drawing mode 
    }
    
       /* was previously trying to get particles disappear
    if(keyCode == BACKSPACE){
        for (var i = particles.length-1; i >= 0; i--) {
            particles[i].remove();
        //fill(160); trying to make particles disaPPEAR 
        //rect(40, 40, windowWidth/2, windowHeight/2 - 2);
    }
    */
}


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
var red; //global variable for maximum scope 
var orange;
var yellow;
var green;
var blue;
var violet;
var white;
var black;
var whichColor; 

var ballLocX = 49;
var ballLocY = 25;

//var second = second(); //not working yet 

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);
    angleMode(DEGREES);
    //the colors that you can choose from
     //ballLocX = windowWidth / 2;
     //ballLocY = windowHeight / 2;
     red = color(255, 0, 0);
     orange = color(204, 102, 0);
     yellow = color(204, 153, 0);
     green = color(0, 255, 0);
     blue = color(0, 0, 255);
     violet = color(255, 0, 255);
     white = color(255, 255, 255);
     black = color(0, 0, 0);

}

function draw(){
    background(255);
    fill(green);
    //earthBreath();
   airBreath();
    //fireBreath();
}

function palette(){ 
    for(var i = 0; i < 8; i ++){
     ellipse(25, 25, 10, 10);  //use this to draw the palette colors?  
        
    }
}
function mouseDragged(){
  ellipse(mouseX, mouseY, 20, 20);  
    
}

function chooseColor(){
    
    
}

function airBreath(){
    
    noFill();
    stroke(255, 102, 0);
   // line(85, 20, 10,10);
    //line(90, 90, 15, 80);
    stroke(0, 0, 0);
    bezier(70, 15, 5, 10, 90, 90, 35, 80);
    fill(red);
    push();
    noStroke();
    triangle(50, 40, 45, 50, 55, 50);
    ellipse(ballLocX, ballLocY, 25, 35);
    pop();
   // ballLocY++;
    //fill(red);
    
    /*
    while(second > 0 && second < 4)
    ballLocY--;
    ellipse(ballLocX, ballLocY, 50, 50);
    */
}

function earthBreath(){
    fill(green);
    rect(windowWidth - 100, 0, 100, windowHeight);
}

function fireBreath(){
    push();
    rotate(30);
    ellipse(windowWidth/2, 30, 20, 20); //make ring of circles 
    pop();

}

function waterBreath(){
    
}
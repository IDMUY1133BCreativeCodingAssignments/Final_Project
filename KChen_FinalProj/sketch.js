var samplebg;
var x;
var xpos;
var ypos;


function preload(){
    samplebg = loadImage("data/samplebg.png");
}

function setup(){
    createCanvas(800, 500);
    background(200, 200, 250);
}

function draw(){
    x = 0;
    image(samplebg, x, 0, 10000, 300);
    character();
}

function character(){
    xpos = 25;
    ypos = 275;
    ellipse(xpos, ypos, 50, 50);    
}
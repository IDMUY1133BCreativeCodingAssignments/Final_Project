

var heart;


function preload(){
	heart = loadImage('assets/heartr.png');
}

function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){

}

function mousePressed(){
	image(heart, mouseX, mouseY);
	return false;
}
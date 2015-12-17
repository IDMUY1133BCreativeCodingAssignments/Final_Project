var font; 

var message = "DREAM"; 
var message1 = "FRIENDS";
var message2 = "PARENT'S LOVE";

var fontsize = 70; 

var bound, bound1, bound2; 

//dream
var musicIMG;
var musicBIMG;
var music; 

var value =0;
var value1=0;
var value2=0;

function preload(){
	font = loadFont('font/Minimal.ttf');
	//dream
	musicBIMG = loadImage('assets/music2.png');
	music = loadSound('assets/music.mp3');
}

function setup(){
	createCanvas(800,800);

	textFont(font);
}

function draw(){
	text(message,100,100);
	bound = font.textBounds(message,100,100,fontsize);
	bound1 = font.textBounds(message1,300,200,fontsize);
	bound2 = font.textBounds(message2, 500,100,fontsize);
}

function mouseClicked(){
		fill(value);
		ellipse(100,100,70,70);
	if ( mouseX >= bound.x && mouseX <= bound.x + bound.w &&
    		mouseY >= bound.y && mouseY <= bound.y + bound.h) {				
				if(value ==0){
					value = color(255,221,13);
				//console.log("itworks!");
				}
				else{
					value = 0;
				}	
		}//second if
	}
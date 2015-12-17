
var font;

var message =  "dream";
var message1 = "social life";
var message2 = "parent's love";
var message3 = "inspiration";

var fontsize = 100;

var bound,bound1,bound2,bound3;

var value =0;
var value1=0;
var value2=0;
var value3=0;


var pos = 500;
var ypos = 500; 
var speed = 1; 
var sp = 2;  
//var colB = color(255,221,13);

var note;
var note2;
//var lengths = [];
//var w = -50;

var book;
var j;
//var notesa = [10];
var musicNo;
var bHeart;
var rHeart;
function preload(){
	font = loadFont('font/Minimal.ttf');
	/*
	note = loadImage('assets/noteM.png');
	note2 = loadImage('assets/note2.png');
	musicNo = loadImage('assets/music2.png');
	bHeart = loadImage('assets/heart.png');
	rHeart = loadImage('assets/heartr.png');
	*/
}

function setup(){
	createCanvas(800,600);

	textFont(font);

	//musicN = new IMG();
	

}

function draw(){

	bound = font.textBounds(message,100,100,fontsize);
	bound1 = font.textBounds(message1, 300,200,fontsize);
	bound2 = font.textBounds(message2, 500,100,fontsize);
	bound3 = font.textBounds(message3, 700,200,fontsize);
	
	//dream();

	//image(musicNo,0,0);
	//musicNo.resize(width, height);

}

function mouseClicked(){
		
		fill(value);
		ellipse(100,100,90,90);
	if ( mouseX >= bound.x && mouseX <= bound.x + bound.w &&
    		mouseY >= bound.y && mouseY <= bound.y + bound.h) {	

    			
				if(value ==0){
					value = color(255,221,13);
				}
				else{
					value = 0;
					//background(136,138,134);
				}	
			}
		//second if
		fill(value1);
		ellipse(300,200,90,90);
	if ( mouseX >= bound1.x && mouseX <= bound1.x + bound1.w &&
    		mouseY >= bound1.y && mouseY <= bound1.y + bound1.h) {
				if(value1 == 0){
						value1 = color(255,221,13);
				//console.log("it freakingworks!");
					}
				else{
					value1 = 0;
					//background(103,105,102);
				}	
 	}//first if

 		fill(value2);
 		ellipse(500,100,90,90);
 	if ( mouseX >= bound2.x && mouseX <= bound2.x + bound2.w &&
    		mouseY >= bound2.y && mouseY <= bound2.y + bound2.h) {
				if(value2 ==0){
						value2 = color(255,221,13);
				//console.log("it freaking works!!");
					}
				else{
					value2 = 0;

					//background(75,76,74);

				}	
 	}//first if
	    fill(value3);
		ellipse(700,200,90,90);
 	if ( mouseX >= bound3.x && mouseX <= bound3.x + bound3.w &&
    		mouseY >= bound3.y && mouseY <= bound3.y + bound3.h) {
				if(value3 ==0){
						value3 = color(255,221,13);

					}
				else{
					value3 = 0;
					//background(60,61,60);
				}	
 	}//first if 	
 }

//mouseclicked

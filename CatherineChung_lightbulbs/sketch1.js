
	//bound, 
var font;

var message =  "dream";
var message1 = "friends";
var message2 = "parent's love";
var message3 = "sns";
var message4 = "inspiration";
var message5 = "social life";

var fontsize = 30;

var bound,bound1,bound2,bound3,bound4,bound5;
var value =0;
var value1=0;
var value2=0;
var value3=0;
var value4=0;
var value5=0;
//var value1=0;
function preload(){
	font = loadFont('font/Minimal.ttf');

}

function setup(){
	createCanvas(windowWidth,windowHeight);

	textFont(font);

	

}

function draw(){

	bound = font.textBounds(message,100,100,fontsize);
	bound1 = font.textBounds(message1, 300,200,fontsize);
	bound2 = font.textBounds(message2, 500,100,fontsize);
	bound3 = font.textBounds(message3, 700,250,fontsize);
	bound4 = font.textBounds(message4, 900,90,fontsize);
	bound5 = font.textBounds(message5, 1100,150,fontsize);

	



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

		fill(value1);
		ellipse(300,200,50,50);
	if ( mouseX >= bound1.x && mouseX <= bound1.x + bound1.w &&
    		mouseY >= bound1.y && mouseY <= bound1.y + bound1.h) {
				if(value1 ==0){
						value1 = color(255,221,13);
				//console.log("it freakingworks!");
					}
				else{
					value1 = 0;
				}	
 	}//first if
 		fill(value2);
 		ellipse(500,100,80,80);
 	if ( mouseX >= bound2.x && mouseX <= bound2.x + bound2.w &&
    		mouseY >= bound2.y && mouseY <= bound2.y + bound2.h) {
				if(value2 ==0){
						value2 = color(255,221,13);
				//console.log("it freaking works!!");
					}
				else{
					value2 = 0;
				}	
 	}//first if
	    fill(value3);
		ellipse(700,250,30,30);
 	if ( mouseX >= bound3.x && mouseX <= bound3.x + bound3.w &&
    		mouseY >= bound3.y && mouseY <= bound3.y + bound3.h) {
				if(value3 ==0){
						value3 = color(255,221,13);
				//console.log("it freaking works!!!");
					}
				else{
					value3 = 0;
				}	
 	}//first if 	
	    fill(value4);
		ellipse(900,90,90,90);
 	if ( mouseX >= bound4.x && mouseX <= bound4.x + bound4.w &&
    		mouseY >= bound4.y && mouseY <= bound4.y + bound4.h) {
				if(value4 ==0){
						value4 = color(255,221,13);
				//console.log("it freaking works!!!!");
					}
				else{
					value4 = 0;
				}	
 	}//first if 	
	    fill(value5);
		ellipse(1100,150,60,60);
 	if ( mouseX >= bound5.x && mouseX <= bound5.x + bound5.w &&
    		mouseY >= bound5.y && mouseY <= bound5.y + bound5.h) {
				if(value5 ==0){
						value5 = color(255,221,13);
				//console.log("it freaking works!!!!");
					}
				else{
					value5 = 0;
				}	
 	}//first if 	
}//mouseclicked

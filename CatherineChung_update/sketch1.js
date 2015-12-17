
var font;
var a,s,d,f,g,e;
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
/*
var value =color(255,221,13);
var value1=color(255,221,13);
var value2=color(255,221,13);
var value3=color(255,221,13);
var value4=color(255,221,13);
var value5=color(255,221,13);
*/
var book;
var j;
var bulbs = [];
//var value1=0;
function preload(){
	font = loadFont('font/Minimal.ttf');
	book = loadAnimation("assets/ab.png","assets/b.png");
	j = loadImage('assets/afg.jpg');
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

	//frameRate(10);
	//animation(book, 600,600);
	image(j,200,200)

	backChange();

}

function mouseClicked(){
		
		fill(value);
		ellipse(100,100,70,70);
	if ( mouseX >= bound.x && mouseX <= bound.x + bound.w &&
    		mouseY >= bound.y && mouseY <= bound.y + bound.h) {				
				if(value ==0){
					value = color(255,221,13);
					bulbs.push(a);
				//console.log("itworks!");
				}
				else{
					value = 0;
					//if turned off then take it out of the array
					bulbs.splice(i, 1);

				}	
		}//second if

		fill(value1);
		ellipse(300,200,50,50);
	if ( mouseX >= bound1.x && mouseX <= bound1.x + bound1.w &&
    		mouseY >= bound1.y && mouseY <= bound1.y + bound1.h) {
				if(value1 == 0){
						value1 = color(255,221,13);
						//value1 = 0;
						bulbs.push(s);

				//console.log("it freakingworks!");
					}
				else{
					value1 = color(255,221,13);
					//if turned off then take it out of the array
					bulbs.splice(i, 1);

				}	
 	}//first if
 		fill(value2);
 		ellipse(500,100,80,80);
 	if ( mouseX >= bound2.x && mouseX <= bound2.x + bound2.w &&
    		mouseY >= bound2.y && mouseY <= bound2.y + bound2.h) {
				if(value2 ==0){
						value2 = color(255,221,13);
						bulbs.push(d);

				//console.log("it freaking works!!");
					}
				else{
					value2 = 0;
					//if turned off then take it out of the array
					bulbs.splice(i, 1);

				}	
 	}//first if
	    fill(value3);
		ellipse(700,250,30,30);
 	if ( mouseX >= bound3.x && mouseX <= bound3.x + bound3.w &&
    		mouseY >= bound3.y && mouseY <= bound3.y + bound3.h) {
				if(value3 ==0){
						value3 = color(255,221,13);
						bulbs.push(f);
				//console.log("it freaking works!!!");
					}
				else{
					value3 = 0;
					//if turned off then take it out of the array
					bulbs.splice(i, 1);

				}	
 	}//first if 	
	    fill(value4);
		ellipse(900,90,90,90);
 	if ( mouseX >= bound4.x && mouseX <= bound4.x + bound4.w &&
    		mouseY >= bound4.y && mouseY <= bound4.y + bound4.h) {
				if(value4 ==0){
						value4 = color(255,221,13);
						bulbs.push(g);

				//console.log("it freaking works!!!!");
					}
				else{
					value4 = 0;
					//if turned off then take it out of the array
					bulbs.splice(i, 1);

				}	
 	}//first if 	
	    fill(value5);
		ellipse(1100,150,60,60);
 	if ( mouseX >= bound5.x && mouseX <= bound5.x + bound5.w &&
    		mouseY >= bound5.y && mouseY <= bound5.y + bound5.h) {
				if(value5 ==0){
						value5 = color(255,221,13);
						bulbs.push(e);

				//console.log("it freaking works!!!!");
					}
				else{
					value5 = 0;
					//if turned off then take it out of the array
					bulbs.splice(i, 1);
				}	
 	}//first if 	
}//mouseclicked

function backChange(){

	//as the number gets lower, the darker the background gets, eventually leading to black 
	for(var i = bulbs.length-1; i>=0; i--);
		if(bulbs.length == 5){
			background(136,138,134);
		}
		if(bulbs.length == 4){
			background(103,105,102);
		}
		if(bulbs.length == 3){
			background(75,76,74);
		}
		if(bulbs.length == 2){
			background(60,61,60);
		}
		if(bulbs.length == 1){
			background(45,46,45);
		}
		if(bulbs.length == 0){
			background(0);
		}


}
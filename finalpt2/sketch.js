
var Bulbs = []; 



var book;
var table;

var value = 0; 
//var value = color(255,221,13);
function preload(){
	book = loadAnimation("assets/a.png","assets/b.png","assets/c.png","assets/d.png");
	table = loadImage("table.png");
}

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	//background(255);
	fill(value);
if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
	console.log("hi");
}
}
			//dreams of becoming a singer
	//ellipse(100,100,70,70);
		//friends 
	ellipse(300,250,50,50);
		//sns 
	ellipse(500,150,80,80);
		//social life
	ellipse(700,300,30,30);
		//love and support of parents 
	ellipse(900,100,90,90);
		//inspirations 
	ellipse(1100,150,60,60);

	animation(book, 200,500);

	//image(table,width/2, 400);
	frameRate(20);
/*
	stroke(2);
	fill(255,0,0,0.25);
	line(0,windowHeight/2,windowWidth,windowHeight/2);

	image(book, 500,windowHeight/2);
*/
}

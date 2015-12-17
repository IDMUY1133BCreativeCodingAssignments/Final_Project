
var book;
function preload(){
	book = loadImage('img/books.png');
}

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(255);
	fill(255,236,13);
	ellipse(100,100,70,70);
	ellipse(300,250,50,50);
	ellipse(500,150,80,80);
	ellipse(700,300,30,30);
	ellipse(900,100,90,90);
	ellipse(1100,150,60,60);

	stroke(2);
	fill(255,0,0,0.25);
	line(0,windowHeight/2,windowWidth,windowHeight/2);

	image(book, 500,windowHeight/2);

}
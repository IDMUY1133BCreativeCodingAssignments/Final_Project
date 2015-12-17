//var font;

var text; 
var response;
function preload(){
		//font = loadFont('font/Minimal.ttf');
		text = loadAnimation('texting/1.png','texting/20.png');
		response = loadAnimation('response/1a.png','response/2a.png','response/3a.png','response/4a.png','response/5a.png','response/6a.png','response/7a.png','response/8a.png');
}		
function setup(){
	createCanvas(800,800);
}

function draw(){
	background(0);
	animation(text, 300,500);
	animation(response, 600,500);

}


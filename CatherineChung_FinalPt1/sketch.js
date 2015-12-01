function setup(){
	createCanvas(windowWidth,windowHeight, WEBGL);

	blu = new LightBulb();
}


function draw(){
	background(100);
	//var dirY = (mouseY / height - 0.5) *2;
 	//var dirX = (mouseX / width - 0.5) *2;
// 	var dirY = mouseY;
 //	var dirX = mouseX;
 //	push();
 // 	directionalLight(255, 100, 0, dirY, dirX, 0.25);
 // 	rotateY(radians(frameCount%360));
 //translate(250,0,0);
 // 	sphere(100);
 // 	pop();

  	for (var i = 0; i < bulbs.length; i++){
		blu.addBulb();
		blu.display();

}
}

var LightBulb = function(){
	this.bulbs = [];
};

LightBulb.prototype.run = function(){

	this.display();
};
LightBulb.prototype.display = function(){
	push();
	rotateY(radians(frameCount%360));
	sphere(50);
	pop();
};

LightBulb.prototype.addBulb = function(){
	this.bulbs.push(new LightBulb());
}
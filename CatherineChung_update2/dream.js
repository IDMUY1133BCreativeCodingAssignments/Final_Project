var bgm; 

//creating music note vector 

//var musicNote = new p5.Vector

var note2; 

//var musicSystem; 

function preload(){
//	bgm = loadSound("assets/music.mp3");
	note2 = loadAnimation("floating","assets/note2.png","assets/noteM.png");
}

function setup(){
	createCanvas(600,600);

	//musicSystem = new MusicNS(createVector(width/2, height/2));
}

function draw(){
	//bgm.play();
	background(255);
	//musicSystem.addNotes();
	//musicSystem.run();
	//console.log('hw');

	note2.attractionPoint(.2, mouseX, mouseY);
	note2.maxSpeed=2;
}
/*
var MusicN = function(position){
	this.acceleration = createVector(0,0.05);
	this.velocity = createVector(random(-1,1),random(-1,0));
	this.position = position.copy();

};
MusicN.prototype.run = function(){
	this.update();
	this.display();
	//console.log('runfunction works');
};
MusicN.prototype.update = function(){
	this.velocity.add(this.acceleration);
	this.position.add(this.velocity);
	//console.log('updatefunction works');
};
MusicN.prototype.display = function(){
	image(note2, this.position.x, this.position.y);
	//console.log('displayfunction works');
};

var MusicNS = function(position){
	this.origin = position.copy()
	this.particles = [];
	//onsole.log('music ns function works');
	
};

MusicNS.prototype.addNotes = function(){
	this.particles.push(new MusicNS(this.origin));
	//console.log('add note function works');
};

MusicNS.prototype.run = function(){
	for(var i = this.particles.length-1; i >=0; i--){
		var m = this.particles[i];
		m.run();
		console.log('hello');
	}
};
*/
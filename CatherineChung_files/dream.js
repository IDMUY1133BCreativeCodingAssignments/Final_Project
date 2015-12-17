var system;
var music; 

function preload(){
//	bgm = loadSound("assets/music.mp3");
	music = loadImage("assets/note2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  system = new MSystem(createVector(width/2,400));
}

function draw() {
  background(255);
  system.addParticle();
  system.run();
}

// A simple Particle class
var Note = function(position) {
  this.acceleration = createVector(0, 0.01);
  this.velocity = createVector(random(-2, 3), random(-2, 3));
  this.position = position.copy();
};

Note.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Note.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
};

// Method to display
Note.prototype.display = function() {

  image(music, this.position.x, this.position.y);
};

var MSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

MSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

MSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();

  }
};
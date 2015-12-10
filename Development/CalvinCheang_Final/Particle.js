function Particle(pos){							//particle class for an invididual particle
	this.velocity = createVector(1,1);
	this.acceleration = createVector(random(-1,1), random(-1,1));
	this.pos = pos.copy();	
	this.lifespan = 255;

}

Particle.prototype.run = function(){		//combines both functions for convenience
	this.update();
	this.display();
}

Particle.prototype.update = function(){
	this.velocity.add(this.acceleration);
  	this.pos.add(this.velocity);
  	this.lifespan -= 5;

}

Particle.prototype.display = function(){
	fill(255);
	ellipse(this.pos.x, this.pos.y, 10, 10);


}

Particle.prototype.dead = function(){
	if(this.lifespan < 0){
		return true;
	}else{
		return false;
	}
}

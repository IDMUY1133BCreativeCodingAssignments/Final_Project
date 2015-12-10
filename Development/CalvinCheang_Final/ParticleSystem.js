function ParticleSystem(pos){		//make a particle system that starts from pos
	this.center = pos.copy();
	this.particles = [];
}

ParticleSystem.prototype.addParticle = function(){
	this.particles.push(new Particle(this.center));		//push adds a particle to the array, creating a new particle
}

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {	//loop backwards to remove
    var p = this.particles[i];
    p.run();
    if (p.dead()) {						//check to see if the particle is dead
      this.particles.splice(i, 1);		//splice = remove
    }
  }
};
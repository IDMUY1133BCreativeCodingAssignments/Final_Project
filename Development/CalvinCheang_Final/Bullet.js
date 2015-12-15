var vel;

function Bullet(loc, vel){
	this.loc = createVector();
	this.vel = vel.copy();

}

Bullet.prototype.update = function(){
	createVector().add(this.vel);

}

Bullet.prototype.display = function(){
	fill(0);
	ellipse(this.loc.x,this.loc.y,5,5);
}
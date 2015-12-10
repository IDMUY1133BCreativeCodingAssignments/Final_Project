function Player(){
	this.location = createVector(width/2, height/2);
	this.maxSpeed = 3.0;
	this.playerSpeed = createVector();

}

Player.prototype.display=function(){
	fill(255,0,0);
	ellipse(this.location.x,this.location.y,20,20);
}

Player.prototype.update = function(){
	if(keyIsPressed){
		if(key == "a" || "A"){
			this.playerSpeed.x = -this.maxSpeed;
		}
		if(key == "w" || "W"){
			this.playerSpeed.y = -this.maxSpeed;
		}
		if(key == "d" || "D"){
			this.playerSpeed.x = this.maxSpeed;
		}
		if(key == "s" || "S"){
			this.playerSpeed.y = this.maxSpeed;
		}
	}
}
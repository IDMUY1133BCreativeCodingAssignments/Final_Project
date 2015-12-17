function Player(){
	this.pos = createVector(width/2, height/2);
	this.maxSpeed = parseInt(3);
	this.playerSpeed = createVector();

}

Player.prototype.display=function(){
	fill(255,0,0);
	ellipse(this.pos.x,this.pos.y,20,20);
}

Player.prototype.update = function(){
	this.pos.add(playerSpeed);
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
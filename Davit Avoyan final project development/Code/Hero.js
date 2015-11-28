function Hero(_maxSpeed){
    this.location = createVector(20, 20);
    this.vertical_velocity = createVector(0, 10);
    this.horizontal_velocity = createVector(10, 0);

    this.acceleration = createVector(0, 0);
    this.maxSpeed = _maxSpeed;  //how fast do we allow hero to go
    this.acceleration_limit = 30;  //tracking and limiting for how long the user can boost the velocity
}

Hero.prototype.update = function(){
    
    function keyPressed(){
        if(keyCode === UP_ARROW){
            this.location = this.location.sub(this.vertical_velocity);
        }
        
        if(keyCode === DOWN_ARROW){
            this.location = this.location.add(this.vertical_velocity);
        }
        
        if(keyCode === LEFT_ARROW){
            this.location = this.location.sub(this.vertical_velocity);
        }
        
        if(keyCode === RIGHT_ARROW){
            this.location = this.location.add(this.vertical_velocity);
        }
    }
       
}

Hero.prototype.borders = function(){  //making sure the Hero stays within the borders
    if(this.location.x < -this.r){
        this.location.x = windowWidth+this.r;
    } 
    if(this.location.y < -this.r){
     this.location.y = windowHeight+this.r;
    }
    if (this.location.x > windowWidth+this.r){
     this.location.x = -this.r;
    }
    if (this.location.y > windowHeight+this.r) {
        this.location.y = -this.r;
    }
}

Hero.prototype.display = function(c, lev_size){  //takes the parameter of color and size for according 
                                                    //to the level of the hero character 
    noStroke();
    fill(c);
    ellipse(this.location.x, this.location.y, lev_size, lev_size);
}
function Hero(_maxSpeed){
    
    this.startX = 60;
    this.startY = 700;
    this.x = this.startX;
    this.y = this.startY;
    this.speed = 2;
    this.acceleration = 1.2;

    this.maxSpeed = _maxSpeed;  //how fast do we allow hero to go
    this.acceleration_limit = 30;  //tracking and limiting for how long the user can boost the velocity
}

Hero.prototype.update = function(){
    
    function keyPressed(){
        if(keyCode === UP_ARROW){
            this.y = this.y-this.speed;
        }
        
        if(keyCode === DOWN_ARROW){
            this.y = this.y+this.speed;
        }
        
        if(keyCode === LEFT_ARROW){
            this.x = this.x-this.speed;
        }
        
        if(keyCode === RIGHT_ARROW){
            this.x = this.x+this.speed;
        }
    }
    
    /*if(keyPressed = "32"){
        this.speed = this.speed*this.acceleration;
        this.acceleration_limit -= 1;
        
        var acc_limit = createSprite(750, 750, 15, this.acceleration_limit); //acceleration limit status bar
        
        if(this.acceleration_limit = 0){
            character = createSprite(this.startX, this.startY, lev_size, lev_size);  //set the character back 
                                                                            if limit is reached 
        }
    }
    
    if(this.speed > _maxSpeed){
        this.speed = _maxSpeed;
    }
    
    */
          
}

Hero.prototype.borders = function(){  //making sure the Hero stays within the borders
    
    if(this.x < 0){
        this.x = 0;
    } 
    if(this.y < 0){
     this.y = 0;
    }
    if (this.x > width){
     this.x = width;
    }
    if (this.y > height) {
        this.y = height;
    }
}

Hero.prototype.display = function(c, lev_size){  //takes the parameter of color and size for according 
                                                    //to the level of the hero character 
    noStroke();
    fill(c);
    var character = createSprite(this.x, this.y, lev_size, lev_size);
    drawSprites();
}

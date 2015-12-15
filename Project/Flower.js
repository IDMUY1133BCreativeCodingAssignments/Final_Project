function Flower(){
    this.floLocX = windowWidth/2;
    this.floLocY = windowHeight/2;
    this.run = 1;
}

Flower.prototype.breathe = function(bckgFill, colorFill){
    push();
    if(this.run == 1){
    background(bckgFill); 
    this.milliseconds = millis();  
    this.fourSecond = this.milliseconds + 4000;
    this.sevenSecond = this.fourSecond + 7000;
    this.eightSecond = this.sevenSecond + 8000;
    this.run = 2;
    }
    fill(colorFill, 150);
    noStroke();
    console.log("Four" + this.fourSecond);
    console.log("Seven" + this.sevenSecond);
    console.log("Eight" + this.eightSecond);
    translate(this.floLocX, this.floLocY);
     if(millis()< this.fourSecond){
        rotate(PI/3);
        ellipse(0, 30, 20, 80);
        rotate(PI/3);
        ellipse(0, 30, 20, 80);
    }
    else if(millis() < this.sevenSecond){
        console.log("Changed");
        rotate(PI);
        ellipse(0, 30, 20, 80);
        rotate(PI);
        ellipse(0, 30, 20, 80);
    }
   else if(millis() < this.eightSecond){
       rotate(5*PI/3);
        ellipse(0, 30, 20, 80);
       rotate(5*PI/3);
       ellipse(0, 30, 20,80);
    }
     else if(millis() > this.eightSecond){
    background(mint);
     this.milliseconds = millis();
        this.fourSecond = this.milliseconds + 4000;
        this.sevenSecond = this.fourSecond + 7000;
        this.eightSecond = this.sevenSecond + 8000; 
    } 
    pop();
}
Flower.prototype.breatheDisplay = function(colorFill){
    push();
    fill(colorFill);
    noStroke();
    ellipse(this.floLocX, this.floLocY, 20, 20);
    pop();
}

Flower.prototype.action = function(){
    
    
}
Flower.prototype.actionDisplay = function(){
    
    
}

Flower.prototype.playSong = function(song){
    song.play();
    song.loop();
}

Flower.prototype.stopSong = function(song){
    song.stop();
}
Flower.prototype.reset = function(){
   this.floLocX = windowWidth/2;
    this.floLocY = windowHeight/2;
    this.run = 1; 
    
}
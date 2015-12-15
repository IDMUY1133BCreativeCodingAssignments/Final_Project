function Candle(){
    this.run = 1;
    this.translateY = 0;
    rectMode(CORNERS);
}

Candle.prototype.breathe = function(){
    if(this.run == 1){
    this.milliseconds = millis();  
    this.fourSecond = this.milliseconds + 4000;
    this.sevenSecond = this.fourSecond + 7000;
    this.eightSecond = this.sevenSecond + 8000;
    this.run = 2;
    }
    if(millis()<this.fourSecond){
         this.translateY = this.translateY + .5;
         fill(255, 144, 134);
    }
    else if(millis() < this.sevenSecond){
        this.translateY = this.translateY + .3;
        fill(118, 225, 115);
    }
   else if(millis() < this.eightSecond){
        this.translateY = this.translateY + .1;
        fill(93, 198, 225);
   }  
     else if(millis() > this.eightSecond){
        this.milliseconds = millis();
        this.fourSecond = this.milliseconds + 4000;
        this.sevenSecond = this.fourSecond + 7000;
        this.eightSecond = this.sevenSecond + 8000; 
        this.translateY = 0;
    }
}

Candle.prototype.breatheDisplay = function(colorFill, colorFill1){
    background(180);
    noStroke();
    push();
    fill(colorFill);
    translate(14, this.translateY);
    triangle(windowWidth/2 + 1, windowHeight/2-60, windowWidth/2 + 39, windowHeight/2 - 60, windowWidth/2 + 20, windowHeight/2-100);
    ellipse(windowWidth/2 + 20, windowHeight/2 - 60, 35, 40);
    pop();
    noStroke();
    rect(windowWidth/2 + 15, windowHeight/2 - 20 + this.translateY, windowWidth/2 + 50, windowHeight/2 + 250);
    
}

Candle.prototype.action = function(){
    
    
}

Candle.prototype.actionDisplay = function(){
    
    
}
Candle.prototype.playSong = function(song){
    song.play();
    song.loop();
}

Candle.prototype.stopSong = function(song){
    song.stop();
}
Candle.prototype.reset = function(){
    this.translateY = 0;
    this.run = 1;
}
function Candle(){
    this.candLocY = 30;
    this.cand2LocY = 30;
    this.cand3LocY = 30;
    this.run = 1;
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
         this.candLocY = this.candLocY + .5;
         this.cand2LocY = this.candLocY;
    }
    else if(millis() < this.sevenSecond){
        this.cand2LocY = this.cand2LocY + .5;
        this.cand3LocY = this.cand2LocY;
    }
   else if(millis() < this.eightSecond){
        this.cand3LocY = this.cand3LocY + .5;
   }  
     else if(millis() > this.eightSecond){
        this.milliseconds = millis();
        this.fourSecond = this.milliseconds + 4000;
        this.sevenSecond = this.fourSecond + 7000;
        this.eightSecond = this.sevenSecond + 8000; 
     //runAgain(); 
    }
}

Candle.prototype.breatheDisplay = function(colorFill, colorFill1, colorFill2, colorFill3){
    push();
    background(180);
    noStroke();
    fill(colorFill);
    triangle(windowWidth/2 + 1, windowHeight/2-60, windowWidth/2 + 39, windowHeight/2 - 60, windowWidth/2 + 20, windowHeight/2-100);
    ellipse(windowWidth/2 + 20, windowHeight/2 - 60, 35, 40);
    noStroke();
    fill(colorFill1);
    rect(windowWidth/2, windowHeight/2 - 30, 40, this.candLocY); //fix these a little 
    fill(colorFill2);
    rect(windowWidth/2, windowHeight/2, 40, this.cand2LocY);
    fill(colorFill3);
    rect(windowWidth/2, windowHeight/2 + 30, 40, this.cand3LocY);
    pop();
    
}

Candle.prototype.action = function(){
    
    
}

Candle.prototype.actionDisplay = function(){
    
    
}
Candle.prototype.playSong = function(song){
    
    
}

Candle.prototype.reset = function(){
    this.candLocY = 30; 
    this.cand2LocY = 30;
    this.cand3LocY = 30;
    this.run = 1;
}